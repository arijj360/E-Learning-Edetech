package com.oralis.userprogress.dto;

import com.oralis.userprogress.entity.CefrLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProgressResponse {
    private Long id;
    private Long userId;
    private String userFullName;
    private CefrLevel currentLevel;
    private CefrLevel targetLevel;
    private Double score;
    private Integer completedExercises;
    private LocalDateTime lastActivity;
}
