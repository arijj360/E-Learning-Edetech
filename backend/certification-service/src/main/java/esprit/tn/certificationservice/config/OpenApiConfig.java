package esprit.tn.certificationservice.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Certification Service API",
                version = "1.0.0",
                description = """
                        **Microservice n°6 : Certification**

                        Ce service fait partie de la plateforme d'entraînement et d'évaluation \
                        de l'expression orale en français et en anglais (alignée sur le CECRL).

                        Il est responsable de :
                        - la gestion des certifications préparées (DELF, DALF, TCF, IELTS, TOEFL, Cambridge)
                        - le suivi des niveaux visés (B1 à C2)
                        - la délivrance des attestations de niveau

                        Technologies : Spring Boot, Spring Data JPA, MySQL.
                        """,
                contact = @Contact(name = "Équipe E-Learning Edetech")
        ),
        servers = @Server(url = "http://localhost:8085", description = "Serveur local")
)
public class OpenApiConfig {
}