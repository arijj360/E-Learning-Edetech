package tn.esprit.edetech.simulationservice.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.edetech.simulationservice.services.SimulationService;

@RestController
@RequestMapping("/api/simulations")
@RequiredArgsConstructor
@Tag(name = "Simulation", description = "Simulation service endpoints")
public class SimulationController {

    private final SimulationService simulationService;

    @Operation(summary = "Hello endpoint to check that the service is running")
    @GetMapping("/hello")
    public String hello() {
        return simulationService.hello();
    }
}