package com.oralis.userprogress.dto;

import com.oralis.userprogress.entity.CefrLevel;
import com.oralis.userprogress.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
    private Long establishmentId;
    private String establishmentName;
    private Long groupId;
    private String groupName;
    private CefrLevel targetLevel;
    private LocalDateTime createdAt;
}
