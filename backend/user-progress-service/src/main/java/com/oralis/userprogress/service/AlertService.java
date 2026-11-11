package com.oralis.userprogress.service;

import com.oralis.userprogress.dto.AlertRequest;
import com.oralis.userprogress.dto.AlertResponse;
import com.oralis.userprogress.entity.Alert;
import com.oralis.userprogress.entity.User;
import com.oralis.userprogress.exception.ResourceNotFoundException;
import com.oralis.userprogress.repository.AlertRepository;
import com.oralis.userprogress.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AlertService {
    
    private final AlertRepository alertRepository;
    private final UserRepository userRepository;
    
    public List<AlertResponse> getAlertsByUserId(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User not found with id: " + userId);
        }
        
        return alertRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public AlertResponse createAlert(AlertRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + request.getUserId()));
        
        Alert alert = new Alert();
        alert.setUser(user);
        alert.setType(request.getType());
        alert.setMessage(request.getMessage());
        alert.setRead(false);
        
        Alert saved = alertRepository.save(alert);
        return toResponse(saved);
    }
    
    @Transactional
    public AlertResponse markAsRead(Long alertId) {
        Alert alert = alertRepository.findById(alertId)
                .orElseThrow(() -> new ResourceNotFoundException("Alert not found with id: " + alertId));
        
        alert.setRead(true);
        Alert updated = alertRepository.save(alert);
        return toResponse(updated);
    }
    
    private AlertResponse toResponse(Alert alert) {
        AlertResponse response = new AlertResponse();
        response.setId(alert.getId());
        response.setUserId(alert.getUser().getId());
        response.setUserFullName(alert.getUser().getFirstName() + " " + alert.getUser().getLastName());
        response.setType(alert.getType());
        response.setMessage(alert.getMessage());
        response.setRead(alert.getRead());
        response.setCreatedAt(alert.getCreatedAt());
        return response;
    }
}
