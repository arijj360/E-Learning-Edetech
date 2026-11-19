package com.oralis.userprogress.config;

import com.oralis.userprogress.entity.*;
import com.oralis.userprogress.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {
    
    private final EstablishmentRepository establishmentRepository;
    private final UserRepository userRepository;
    private final GroupRepository groupRepository;
    private final ProgressRepository progressRepository;
    private final AlertRepository alertRepository;
    
    @Override
    public void run(String... args) throws Exception {
        // Check if data already exists
        if (establishmentRepository.count() > 0) {
            return;
        }
        
        // Create Establishment
        Establishment establishment = new Establishment();
        establishment.setName("Language Academy Paris");
        establishment.setAddress("123 Rue de la Paix, 75002 Paris");
        establishment = establishmentRepository.save(establishment);
        
        // Create Users
        User superAdmin = createUser("Jean", "Dupont", "jean.dupont@oralis.com", "password123", 
                Role.SUPER_ADMIN, establishment, null, CefrLevel.C2);
        
        User establishmentAdmin = createUser("Marie", "Martin", "marie.martin@oralis.com", "password123", 
                Role.ESTABLISHMENT_ADMIN, establishment, null, CefrLevel.C1);
        
        User trainer1 = createUser("Pierre", "Bernard", "pierre.bernard@oralis.com", "password123", 
                Role.TRAINER, establishment, null, CefrLevel.C2);
        
        User trainer2 = createUser("Sophie", "Dubois", "sophie.dubois@oralis.com", "password123", 
                Role.TRAINER, establishment, null, CefrLevel.C1);
        
        // Create Groups
        Group group1 = new Group();
        group1.setName("English Beginners A1");
        group1.setEstablishment(establishment);
        group1.setTrainer(trainer1);
        group1 = groupRepository.save(group1);
        
        Group group2 = new Group();
        group2.setName("French Intermediate B1");
        group2.setEstablishment(establishment);
        group2.setTrainer(trainer2);
        group2 = groupRepository.save(group2);
        
        // Create Learners
        User learner1 = createUser("Alice", "Lefebvre", "alice.lefebvre@student.com", "password123", 
                Role.LEARNER, establishment, group1, CefrLevel.A2);
        
        User learner2 = createUser("Thomas", "Moreau", "thomas.moreau@student.com", "password123", 
                Role.LEARNER, establishment, group1, CefrLevel.B1);
        
        User learner3 = createUser("Emma", "Simon", "emma.simon@student.com", "password123", 
                Role.LEARNER, establishment, group2, CefrLevel.B2);
        
        User learner4 = createUser("Lucas", "Laurent", "lucas.laurent@student.com", "password123", 
                Role.LEARNER, establishment, group2, CefrLevel.B1);
        
        User learner5 = createUser("Chloe", "Michel", "chloe.michel@student.com", "password123", 
                Role.LEARNER, establishment, null, CefrLevel.A1);
        
        // Create Progress
        createProgress(learner1, CefrLevel.A1, 72.5, 15, LocalDateTime.now().minusDays(1));
        createProgress(learner2, CefrLevel.A2, 85.0, 28, LocalDateTime.now().minusHours(3));
        createProgress(learner3, CefrLevel.B1, 91.2, 42, LocalDateTime.now().minusHours(5));
        createProgress(learner4, CefrLevel.B1, 68.3, 22, LocalDateTime.now().minusDays(2));
        createProgress(learner5, CefrLevel.A1, 45.0, 8, LocalDateTime.now().minusDays(7));
        
        // Create Alerts
        createAlert(learner1, AlertType.LEVEL_CHANGE, "Congratulations! You've progressed to A1 level.", false);
        createAlert(learner2, AlertType.ACHIEVEMENT, "Great job! You've completed 25 exercises.", true);
        createAlert(learner3, AlertType.ACHIEVEMENT, "Excellent progress! You've reached 90% score.", false);
        createAlert(learner4, AlertType.LOW_PROGRESS, "Your progress is slower than expected. Consider scheduling more practice sessions.", false);
        createAlert(learner5, AlertType.INACTIVITY, "You haven't practiced in 7 days. Let's get back on track!", false);
        createAlert(trainer1, AlertType.SYSTEM, "New learner Alice Lefebvre has been added to your group.", true);
        
        System.out.println("✅ Sample data loaded successfully!");
        System.out.println("📊 Created:");
        System.out.println("   - 1 Establishment");
        System.out.println("   - 2 Groups");
        System.out.println("   - 9 Users (1 Super Admin, 1 Establishment Admin, 2 Trainers, 5 Learners)");
        System.out.println("   - 5 Progress records");
        System.out.println("   - 6 Alerts");
    }
    
    private User createUser(String firstName, String lastName, String email, String password, 
                           Role role, Establishment establishment, Group group, CefrLevel targetLevel) {
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        user.setEstablishment(establishment);
        user.setGroup(group);
        user.setTargetLevel(targetLevel);
        return userRepository.save(user);
    }
    
    private void createProgress(User user, CefrLevel currentLevel, Double score, 
                               Integer completedExercises, LocalDateTime lastActivity) {
        Progress progress = new Progress();
        progress.setUser(user);
        progress.setCurrentLevel(currentLevel);
        progress.setScore(score);
        progress.setCompletedExercises(completedExercises);
        progress.setLastActivity(lastActivity);
        progressRepository.save(progress);
    }
    
    private void createAlert(User user, AlertType type, String message, Boolean read) {
        Alert alert = new Alert();
        alert.setUser(user);
        alert.setType(type);
        alert.setMessage(message);
        alert.setRead(read);
        alertRepository.save(alert);
    }
}
