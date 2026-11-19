package tn.esprit.edetech.analysisservice.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.edetech.analysisservice.entities.Analysis;

@Repository
public interface AnalysisRepository extends MongoRepository<Analysis, String> {
}