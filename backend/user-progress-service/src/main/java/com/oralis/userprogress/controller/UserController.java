package com.oralis.userprogress.controller;

import com.oralis.userprogress.dto.TargetLevelRequest;
import com.oralis.userprogress.dto.UserRequest;
import com.oralis.userprogress.dto.UserResponse;
import com.oralis.userprogress.entity.Role;
import com.oralis.userprogress.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "User management endpoints")
public class UserController {
    
    private final UserService userService;
    
    @GetMapping
    @Operation(summary = "Get all users", description = "Retrieve all users, optionally filtered by role")
    public ResponseEntity<List<UserResponse>> getAllUsers(
            @RequestParam(required = false) Role role) {
        return ResponseEntity.ok(userService.getAllUsers(role));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get user by ID", description = "Retrieve a specific user by their ID")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    
    @PostMapping
    @Operation(summary = "Create user", description = "Create a new user")
    public ResponseEntity<UserResponse> createUser(@Valid @RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(request));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update user", description = "Update an existing user")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequest request) {
        return ResponseEntity.ok(userService.updateUser(id, request));
    }
    
    @PutMapping("/{id}/target-level")
    @Operation(summary = "Update target level", description = "Update the target CEFR level for a user")
    public ResponseEntity<UserResponse> updateTargetLevel(
            @PathVariable Long id,
            @Valid @RequestBody TargetLevelRequest request) {
        return ResponseEntity.ok(userService.updateTargetLevel(id, request));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete user", description = "Delete a user by ID")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
