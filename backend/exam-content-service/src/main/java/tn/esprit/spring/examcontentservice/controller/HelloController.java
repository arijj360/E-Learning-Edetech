package tn.esprit.spring.examcontentservice.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
@Tag(name = "Hello", description = "Endpoint de test")
public class HelloController {

    @GetMapping
    @Operation(summary = "Retourne un message hello")
    public String hello() {
        return "Hello from EXAM-CONTENT-SERVICE";
    }
}