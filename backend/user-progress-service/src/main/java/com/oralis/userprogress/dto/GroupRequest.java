package com.oralis.userprogress.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupRequest {
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotNull(message = "Establishment ID is required")
    private Long establishmentId;
    
    private Long trainerId;
}
