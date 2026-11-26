package tn.esprit.edetech.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("analysis", r -> r.path("/analysis/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://ANALYSIS-SERVICE"))
                .route("certification", r -> r.path("/certification/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://CERTIFICATION-SERVICE"))
                .route("exam-content", r -> r.path("/exam-content/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://EXAM-CONTENT-SERVICE"))
                .route("feedback", r -> r.path("/feedback/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://FEEDBACK-SERVICE"))
                .route("record", r -> r.path("/record/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://RECORD-SERVICE"))
                // Bonus : Circuit Breaker sur un seul service, comme l'atelier
                .route("simulation", r -> r.path("/simulation/**")
                        .filters(f -> f.stripPrefix(1)
                                .circuitBreaker(c -> c
                                        .setName("simulationCB")
                                        .setFallbackUri("forward:/fallback/simulation")))
                        .uri("lb://SIMULATION-SERVICE"))
                .route("user-progress", r -> r.path("/user-progress/**")
                        .filters(f -> f.stripPrefix(1))
                        .uri("lb://USER-PROGRESS-SERVICE"))
                .build();
    }
}