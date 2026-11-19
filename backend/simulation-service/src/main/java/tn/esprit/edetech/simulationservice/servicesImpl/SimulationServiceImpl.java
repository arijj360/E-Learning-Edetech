package tn.esprit.edetech.simulationservice.servicesImpl;

import org.springframework.stereotype.Service;
import tn.esprit.edetech.simulationservice.services.SimulationService;

@Service
public class SimulationServiceImpl implements SimulationService {

    @Override
    public String hello() {
        return "hello service simulation";
    }
}