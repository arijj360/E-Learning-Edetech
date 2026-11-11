package com.oralis.userprogress.dto;

import com.oralis.userprogress.entity.CefrLevel;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TargetLevelRequest {
    
    @NotNull(message = "Target level is required")
    private CefrLevel targetLevel;
}
