package com.oralis.userprogress.service;

import com.oralis.userprogress.dto.TargetLevelRequest;
import com.oralis.userprogress.dto.UserRequest;
import com.oralis.userprogress.dto.UserResponse;
import com.oralis.userprogress.entity.*;
import com.oralis.userprogress.exception.DuplicateResourceException;
import com.oralis.userprogress.exception.ResourceNotFoundException;
import com.oralis.userprogress.repository.EstablishmentRepository;
import com.oralis.userprogress.repository.GroupRepository;
import com.oralis.userprogress.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final EstablishmentRepository establishmentRepository;
    private final GroupRepository groupRepository;
    
    public List<UserResponse> getAllUsers(Role role) {
        List<User> users = role != null ? userRepository.findByRole(role) : userRepository.findAll();
        return users.stream().map(this::toResponse).collect(Collectors.toList());
    }
    
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return toResponse(user);
    }
    
    @Transactional
    public UserResponse createUser(UserRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("User with email " + request.getEmail() + " already exists");
        }
        
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // In production, hash the password
        user.setRole(request.getRole());
        user.setTargetLevel(request.getTargetLevel());
        
        if (request.getEstablishmentId() != null) {
            Establishment establishment = establishmentRepository.findById(request.getEstablishmentId())
                    .orElseThrow(() -> new ResourceNotFoundException("Establishment not found"));
            user.setEstablishment(establishment);
        }
        
        if (request.getGroupId() != null) {
            Group group = groupRepository.findById(request.getGroupId())
                    .orElseThrow(() -> new ResourceNotFoundException("Group not found"));
            user.setGroup(group);
        }
        
        User savedUser = userRepository.save(user);
        return toResponse(savedUser);
    }
    
    @Transactional
    public UserResponse updateUser(Long id, UserRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        
        if (!user.getEmail().equals(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateResourceException("User with email " + request.getEmail() + " already exists");
        }
        
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());
        user.setTargetLevel(request.getTargetLevel());
        
        if (request.getEstablishmentId() != null) {
            Establishment establishment = establishmentRepository.findById(request.getEstablishmentId())
                    .orElseThrow(() -> new ResourceNotFoundException("Establishment not found"));
            user.setEstablishment(establishment);
        } else {
            user.setEstablishment(null);
        }
        
        if (request.getGroupId() != null) {
            Group group = groupRepository.findById(request.getGroupId())
                    .orElseThrow(() -> new ResourceNotFoundException("Group not found"));
            user.setGroup(group);
        } else {
            user.setGroup(null);
        }
        
        User updatedUser = userRepository.save(user);
        return toResponse(updatedUser);
    }
    
    @Transactional
    public UserResponse updateTargetLevel(Long id, TargetLevelRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        
        user.setTargetLevel(request.getTargetLevel());
        User updatedUser = userRepository.save(user);
        return toResponse(updatedUser);
    }
    
    @Transactional
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
    
    private UserResponse toResponse(User user) {
        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setTargetLevel(user.getTargetLevel());
        response.setCreatedAt(user.getCreatedAt());
        
        if (user.getEstablishment() != null) {
            response.setEstablishmentId(user.getEstablishment().getId());
            response.setEstablishmentName(user.getEstablishment().getName());
        }
        
        if (user.getGroup() != null) {
            response.setGroupId(user.getGroup().getId());
            response.setGroupName(user.getGroup().getName());
        }
        
        return response;
    }
}
