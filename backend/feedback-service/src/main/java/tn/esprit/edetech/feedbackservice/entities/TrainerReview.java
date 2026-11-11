package tn.esprit.edetech.feedbackservice.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "trainer_review")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrainerReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long trainerId;

    @Column(length = 2000)
    private String comment;

    private Double adjustedGrammarScore;

    private Double adjustedLexiconScore;

    private Boolean validated;

    private LocalDateTime reviewedAt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "feedback_id")
    private Feedback feedback;
}
