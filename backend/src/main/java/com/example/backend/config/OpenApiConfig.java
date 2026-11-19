package com.example.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Record Service API")
                        .description("Microservice for managing records in the E-Learning-Edetech platform.")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("E-Learning-Edetech Team")
                                .email("contact@example.com")));
    }
}