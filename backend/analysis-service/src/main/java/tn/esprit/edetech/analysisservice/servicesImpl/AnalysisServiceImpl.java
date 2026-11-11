package tn.esprit.edetech.analysisservice.servicesImpl;

import org.springframework.stereotype.Service;
import tn.esprit.edetech.analysisservice.services.AnalysisService;

@Service
public class AnalysisServiceImpl implements AnalysisService {

    @Override
    public String hello() {
        return "hello service analysis";
    }
}