package com.oralis.userprogress.service;

import com.oralis.userprogress.dto.ProgressRequest;
import com.oralis.userprogress.dto.ProgressResponse;
import com.oralis.userprogress.entity.Progress;
import com.oralis.userprogress.entity.User;
import com.oralis.userprogress.exception.ResourceNotFoundException;
import com.oralis.userprogress.repository.ProgressRepository;
import com.oralis.userprogress.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProgressService {
    
    private final ProgressRepository progressRepository;
    private final UserRepository userRepository;
    
    public ProgressResponse getProgressByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        Progress progress = progressRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Progress not found for user id: " + userId));
        
        return toResponse(progress);
    }
    
    public List<ProgressResponse> getProgressByGroupId(Long groupId) {
        List<User> users = userRepository.findAll().stream()
                .filter(u -> u.getGroup() != null && u.getGroup().getId().equals(groupId))
                .collect(Collectors.toList());
        
        return users.stream()
                .map(user -> progressRepository.findByUserId(user.getId()))
                .filter(opt -> opt.isPresent())
                .map(opt -> toResponse(opt.get()))
                .collect(Collectors.toList());
    }
    
    @Transactional
    public ProgressResponse createOrUpdateProgress(ProgressRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + request.getUserId()));
        
        Progress progress = progressRepository.findByUserId(request.getUserId())
                .orElse(new Progress());
        
        progress.setUser(user);
        progress.setCurrentLevel(request.getCurrentLevel());
        progress.setScore(request.getScore());
        progress.setCompletedExercises(request.getCompletedExercises());
        
        Progress saved = progressRepository.save(progress);
        return toResponse(saved);
    }
    
    private ProgressResponse toResponse(Progress progress) {
        ProgressResponse response = new ProgressResponse();
        response.setId(progress.getId());
        response.setUserId(progress.getUser().getId());
        response.setUserFullName(progress.getUser().getFirstName() + " " + progress.getUser().getLastName());
        response.setCurrentLevel(progress.getCurrentLevel());
        response.setTargetLevel(progress.getUser().getTargetLevel());
        response.setScore(progress.getScore());
        response.setCompletedExercises(progress.getCompletedExercises());
        response.setLastActivity(progress.getLastActivity());
        return response;
    }
}
