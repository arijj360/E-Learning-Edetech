package com.oralis.userprogress.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupResponse {
    private Long id;
    private String name;
    private Long establishmentId;
    private String establishmentName;
    private Long trainerId;
    private String trainerFullName;
    private Integer memberCount;
    private List<UserResponse> members;
}
