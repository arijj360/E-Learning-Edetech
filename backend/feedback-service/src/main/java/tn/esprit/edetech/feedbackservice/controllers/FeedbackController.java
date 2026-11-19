package tn.esprit.edetech.feedbackservice.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.edetech.feedbackservice.services.FeedbackService;

@RestController
@RequestMapping("/api/feedbacks")
@RequiredArgsConstructor
@Tag(name = "Feedback", description = "Feedback service endpoints")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @Operation(summary = "Hello endpoint to check that the service is running")
    @GetMapping("/hello")
    public String hello() {
        return feedbackService.hello();
    }
}
