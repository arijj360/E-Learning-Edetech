package com.oralis.userprogress.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    
    @Bean
    public OpenAPI userProgressServiceOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("User Progress Service API")
                        .description("REST API for managing users, establishments, groups, progress tracking, and alerts in an oral expression training platform")
                        .version("1.0"));
    }
}
