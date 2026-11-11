package com.oralis.userprogress.service;

import com.oralis.userprogress.dto.GroupRequest;
import com.oralis.userprogress.dto.GroupResponse;
import com.oralis.userprogress.dto.UserResponse;
import com.oralis.userprogress.entity.Establishment;
import com.oralis.userprogress.entity.Group;
import com.oralis.userprogress.entity.User;
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
public class GroupService {
    
    private final GroupRepository groupRepository;
    private final EstablishmentRepository establishmentRepository;
    private final UserRepository userRepository;
    
    public List<GroupResponse> getAllGroups() {
        return groupRepository.findAll().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }
    
    public GroupResponse getGroupById(Long id) {
        Group group = groupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found with id: " + id));
        return toResponse(group);
    }
    
    @Transactional
    public GroupResponse createGroup(GroupRequest request) {
        Group group = new Group();
        group.setName(request.getName());
        
        Establishment establishment = establishmentRepository.findById(request.getEstablishmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Establishment not found"));
        group.setEstablishment(establishment);
        
        if (request.getTrainerId() != null) {
            User trainer = userRepository.findById(request.getTrainerId())
                    .orElseThrow(() -> new ResourceNotFoundException("Trainer not found"));
            group.setTrainer(trainer);
        }
        
        Group saved = groupRepository.save(group);
        return toResponse(saved);
    }
    
    @Transactional
    public GroupResponse updateGroup(Long id, GroupRequest request) {
        Group group = groupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found with id: " + id));
        
        group.setName(request.getName());
        
        Establishment establishment = establishmentRepository.findById(request.getEstablishmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Establishment not found"));
        group.setEstablishment(establishment);
        
        if (request.getTrainerId() != null) {
            User trainer = userRepository.findById(request.getTrainerId())
                    .orElseThrow(() -> new ResourceNotFoundException("Trainer not found"));
            group.setTrainer(trainer);
        } else {
            group.setTrainer(null);
        }
        
        Group updated = groupRepository.save(group);
        return toResponse(updated);
    }
    
    @Transactional
    public void deleteGroup(Long id) {
        if (!groupRepository.existsById(id)) {
            throw new ResourceNotFoundException("Group not found with id: " + id);
        }
        groupRepository.deleteById(id);
    }
    
    @Transactional
    public GroupResponse addMember(Long groupId, Long userId) {
        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found with id: " + groupId));
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        user.setGroup(group);
        userRepository.save(user);
        
        return toResponse(groupRepository.findById(groupId).get());
    }
    
    @Transactional
    public GroupResponse removeMember(Long groupId, Long userId) {
        Group group = groupRepository.findById(groupId)
                .orElseThrow(() -> new ResourceNotFoundException("Group not found with id: " + groupId));
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        if (user.getGroup() == null || !user.getGroup().getId().equals(groupId)) {
            throw new ResourceNotFoundException("User is not a member of this group");
        }
        
        user.setGroup(null);
        userRepository.save(user);
        
        return toResponse(groupRepository.findById(groupId).get());
    }
    
    private GroupResponse toResponse(Group group) {
        GroupResponse response = new GroupResponse();
        response.setId(group.getId());
        response.setName(group.getName());
        
        if (group.getEstablishment() != null) {
            response.setEstablishmentId(group.getEstablishment().getId());
            response.setEstablishmentName(group.getEstablishment().getName());
        }
        
        if (group.getTrainer() != null) {
            response.setTrainerId(group.getTrainer().getId());
            response.setTrainerFullName(group.getTrainer().getFirstName() + " " + group.getTrainer().getLastName());
        }
        
        // Fetch members via repository query to avoid circular reference issues
        List<User> members = userRepository.findByGroupId(group.getId());
        
        List<UserResponse> memberResponses = members.stream()
                .map(this::userToResponse)
                .collect(Collectors.toList());
        
        response.setMembers(memberResponses);
        response.setMemberCount(memberResponses.size());
        
        return response;
    }
    
    private UserResponse userToResponse(User user) {
        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setTargetLevel(user.getTargetLevel());
        return response;
    }
}
