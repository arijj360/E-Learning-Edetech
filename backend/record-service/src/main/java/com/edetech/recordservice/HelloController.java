package com.edetech.recordservice;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Hello", description = "Endpoint de test du record-service")
public class HelloController {

    @Operation(summary = "Affiche Hello record-service", description = "Retourne le message Hello pour vérifier que le service fonctionne.")
    @GetMapping("/hello")
    public String hello() {
        return "Hello record-service";
    }
}