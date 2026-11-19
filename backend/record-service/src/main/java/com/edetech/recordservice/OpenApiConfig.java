package com.edetech.recordservice;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Record Service API",
                version = "1.0.0",
                description = "Microservice de gestion des enregistrements de la plateforme E-Learning Edetech.",
                contact = @Contact(
                        name = "Equipe Edetech",
                        email = "contact@edetech.com"
                )
        ),
        servers = {
                @Server(url = "http://localhost:8037", description = "Serveur local")
        }
)
public class OpenApiConfig {
}