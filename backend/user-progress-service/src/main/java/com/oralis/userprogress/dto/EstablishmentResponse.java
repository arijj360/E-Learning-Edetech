package com.oralis.userprogress.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstablishmentResponse {
    private Long id;
    private String name;
    private String address;
    private LocalDateTime createdAt;
}
