package com.oralis.userprogress.controller;

import com.oralis.userprogress.dto.ProgressRequest;
import com.oralis.userprogress.dto.ProgressResponse;
import com.oralis.userprogress.service.ProgressService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@RequiredArgsConstructor
@Tag(name = "Progress", description = "User progress tracking endpoints")
public class ProgressController {
    
    private final ProgressService progressService;
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get progress by user ID", description = "Retrieve progress for a specific user")
    public ResponseEntity<ProgressResponse> getProgressByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(progressService.getProgressByUserId(userId));
    }
    
    @GetMapping("/group/{groupId}")
    @Operation(summary = "Get progress by group ID", description = "Retrieve progress for all users in a group")
    public ResponseEntity<List<ProgressResponse>> getProgressByGroupId(@PathVariable Long groupId) {
        return ResponseEntity.ok(progressService.getProgressByGroupId(groupId));
    }
    
    @PostMapping
    @Operation(summary = "Create or update progress", description = "Create new progress or update existing progress for a user")
    public ResponseEntity<ProgressResponse> createOrUpdateProgress(@Valid @RequestBody ProgressRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(progressService.createOrUpdateProgress(request));
    }
}
