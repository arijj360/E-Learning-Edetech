package tn.esprit.edetech.feedbackservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.edetech.feedbackservice.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
