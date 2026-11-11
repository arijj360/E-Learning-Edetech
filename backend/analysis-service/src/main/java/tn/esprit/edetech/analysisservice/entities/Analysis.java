package tn.esprit.edetech.analysisservice.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "analyses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Analysis {

    @Id
    private String id;

    private Long recordingId;

    private Long userId;

    private LocalDateTime date;

    private List<CriterionScore> criterionScores = new ArrayList<>();

    private List<WordResult> mots = new ArrayList<>();

    private List<Pause> pauses = new ArrayList<>();

    private IntonationCurve intonation;
}