package tn.esprit.edetech.analysisservice.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.edetech.analysisservice.services.AnalysisService;

@RestController
@RequestMapping("/api/analyses")
@RequiredArgsConstructor
@Tag(name = "Analysis", description = "Speech analysis endpoints")
public class AnalysisController {

    private final AnalysisService analysisService;

    @Operation(
            summary = "Hello endpoint",
            description = "Returns a simple message to check that analysis-service is running and reachable.")
    @ApiResponse(responseCode = "200", description = "Service is running")
    @GetMapping("/hello")
    public String hello() {
        return analysisService.hello();
    }
}