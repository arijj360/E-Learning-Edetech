package com.oralis.userprogress.dto;

import com.oralis.userprogress.entity.AlertType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlertResponse {
    private Long id;
    private Long userId;
    private String userFullName;
    private AlertType type;
    private String message;
    private Boolean read;
    private LocalDateTime createdAt;
}
