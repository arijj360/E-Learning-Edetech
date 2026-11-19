package com.oralis.userprogress.controller;

import com.oralis.userprogress.dto.AlertRequest;
import com.oralis.userprogress.dto.AlertResponse;
import com.oralis.userprogress.service.AlertService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
@RequiredArgsConstructor
@Tag(name = "Alerts", description = "User alert management endpoints")
public class AlertController {
    
    private final AlertService alertService;
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get alerts by user ID", description = "Retrieve all alerts for a specific user")
    public ResponseEntity<List<AlertResponse>> getAlertsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(alertService.getAlertsByUserId(userId));
    }
    
    @PostMapping
    @Operation(summary = "Create alert", description = "Create a new alert for a user")
    public ResponseEntity<AlertResponse> createAlert(@Valid @RequestBody AlertRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(alertService.createAlert(request));
    }
    
    @PatchMapping("/{id}/read")
    @Operation(summary = "Mark alert as read", description = "Mark an alert as read")
    public ResponseEntity<AlertResponse> markAsRead(@PathVariable Long id) {
        return ResponseEntity.ok(alertService.markAsRead(id));
    }
}
