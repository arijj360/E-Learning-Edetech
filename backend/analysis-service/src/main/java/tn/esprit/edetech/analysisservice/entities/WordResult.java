package tn.esprit.edetech.analysisservice.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WordResult {

    private String mot;

    private Double debut;

    private Double scorePronoc;

    private List<Phoneme> phonemes = new ArrayList<>();
}