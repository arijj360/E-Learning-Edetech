package tn.esprit.spring.examcontentservice.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI examContentServiceOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Exam Content Service API")
                        .version("1.0.0")
                        .description("Microservice de gestion du contenu des examens "
                                + "de la plateforme E-Learning Edetech : création, "
                                + "consultation, modification et suppression des examens "
                                + "et de leurs questions.")
                        .contact(new Contact()
                                .name("Équipe Edetech")
                                .email("contact@edetech.tn"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8082")
                                .description("Serveur local")));
    }
}