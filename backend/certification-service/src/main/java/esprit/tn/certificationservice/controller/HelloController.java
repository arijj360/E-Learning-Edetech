package esprit.tn.certificationservice.controller;



import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Tag(name = "Hello", description = "Endpoint de test du service")
public class HelloController {

    @GetMapping("/hello")
    @Operation(summary = "Affiche un message de bienvenue")
    public String hello() {
        return "Hello, c'est le microservice de certifiaction";
    }
}
