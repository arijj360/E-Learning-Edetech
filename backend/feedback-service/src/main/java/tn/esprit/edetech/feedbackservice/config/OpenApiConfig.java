package tn.esprit.edetech.feedbackservice.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Feedback Service API",
                version = "1.0.0",
                description = """
                        **Microservice n°5 : Feedback**

                        Ce service fait partie de la plateforme d'entraînement et d'évaluation \
                        de l'expression orale en français et en anglais (alignée sur le CECRL).

                        Il est responsable de :
                        - la correction de grammaire et de lexique, avec reformulations
                        - la recommandation d'exercices ciblant les erreurs récurrentes
                        - la validation et les commentaires du formateur

                        Technologies : Spring Boot, Spring Data JPA, MySQL.
                        """,
                contact = @Contact(name = "Équipe E-Learning Edetech")
        ),
        servers = @Server(url = "http://localhost:8086", description = "Serveur local")
)
public class OpenApiConfig {
}
