package com.oralis.userprogress.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "progress")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Progress {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    @JsonIgnoreProperties({"password", "group", "establishment"})
    private User user;
    
    @Enumerated(EnumType.STRING)
    private CefrLevel currentLevel;
    
    private Double score;
    
    private Integer completedExercises;
    
    private LocalDateTime lastActivity;
    
    @PrePersist
    @PreUpdate
    protected void onUpdate() {
        lastActivity = LocalDateTime.now();
    }
}
