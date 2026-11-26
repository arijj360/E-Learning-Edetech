package tn.esprit.edetech.apigateway.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
public class FallbackController {

    @GetMapping("/fallback/simulation")
    public Mono<ResponseEntity<Map<String, Object>>> simulationFallback() {
        return Mono.just(ResponseEntity.ok(Map.of(
                "message", "Service Simulation temporairement indisponible",
                "degraded", true)));
    }
}