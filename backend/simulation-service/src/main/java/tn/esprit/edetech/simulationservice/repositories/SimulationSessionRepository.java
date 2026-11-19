package tn.esprit.edetech.simulationservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.edetech.simulationservice.entities.SimulationSession;

@Repository
public interface SimulationSessionRepository extends JpaRepository<SimulationSession, Long> {
}