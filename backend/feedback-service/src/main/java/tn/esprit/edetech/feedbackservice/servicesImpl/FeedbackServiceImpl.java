package tn.esprit.edetech.feedbackservice.servicesImpl;

import org.springframework.stereotype.Service;
import tn.esprit.edetech.feedbackservice.services.FeedbackService;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Override
    public String hello() {
        return "hello service feedback";
    }
}
