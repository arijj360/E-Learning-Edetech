package tn.esprit.edetech.simulationservice.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "simulation_session")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SimulationSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userKeycloakId;

    private Long topicId;

    private String topicTitle;

    @Column(length = 2000)
    private String topicPrompt;

    @Enumerated(EnumType.STRING)
    private CEFRLevel level;

    private String language;

    @Enumerated(EnumType.STRING)
    private ExamFormat format;

    @Enumerated(EnumType.STRING)
    private SimulationStatus status;

    private LocalDateTime prepEndsAt;

    private LocalDateTime startedAt;

    private LocalDateTime endedAt;

    @Enumerated(EnumType.STRING)
    private CEFRLevel estimatedLevel;

    private Double overallScore;

    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SimulationTurn> turns = new ArrayList<>();

    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SimulationScore> scores = new ArrayList<>();
}