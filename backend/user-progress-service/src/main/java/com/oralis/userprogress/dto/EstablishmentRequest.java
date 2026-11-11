package com.oralis.userprogress.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstablishmentRequest {
    
    @NotBlank(message = "Name is required")
    private String name;
    
    private String address;
}
