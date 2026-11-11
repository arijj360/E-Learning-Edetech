package tn.esprit.edetech.analysisservice;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(info = @Info(
        title = "Analysis Service API",
        version = "1.0.0",
        description = "Shared advanced microservice of the oral expression training platform. "
                + "It stores speech analysis results: criterion scores, word and phoneme "
                + "pronunciation, pauses and intonation curves."))
@SpringBootApplication
public class AnalysisServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AnalysisServiceApplication.class, args);
    }
}