package com.oralis.userprogress.controller;

import com.oralis.userprogress.dto.GroupRequest;
import com.oralis.userprogress.dto.GroupResponse;
import com.oralis.userprogress.service.GroupService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
@RequiredArgsConstructor
@Tag(name = "Groups", description = "Group management endpoints")
public class GroupController {
    
    private final GroupService groupService;
    
    @GetMapping
    @Operation(summary = "Get all groups", description = "Retrieve all groups")
    public ResponseEntity<List<GroupResponse>> getAllGroups() {
        return ResponseEntity.ok(groupService.getAllGroups());
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get group by ID", description = "Retrieve a specific group by ID")
    public ResponseEntity<GroupResponse> getGroupById(@PathVariable Long id) {
        return ResponseEntity.ok(groupService.getGroupById(id));
    }
    
    @PostMapping
    @Operation(summary = "Create group", description = "Create a new group")
    public ResponseEntity<GroupResponse> createGroup(@Valid @RequestBody GroupRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(groupService.createGroup(request));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update group", description = "Update an existing group")
    public ResponseEntity<GroupResponse> updateGroup(
            @PathVariable Long id,
            @Valid @RequestBody GroupRequest request) {
        return ResponseEntity.ok(groupService.updateGroup(id, request));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete group", description = "Delete a group by ID")
    public ResponseEntity<Void> deleteGroup(@PathVariable Long id) {
        groupService.deleteGroup(id);
        return ResponseEntity.noContent().build();
    }
    
    @PostMapping("/{id}/members/{userId}")
    @Operation(summary = "Add member to group", description = "Add a user to a group")
    public ResponseEntity<GroupResponse> addMember(
            @PathVariable Long id,
            @PathVariable Long userId) {
        return ResponseEntity.ok(groupService.addMember(id, userId));
    }
    
    @DeleteMapping("/{id}/members/{userId}")
    @Operation(summary = "Remove member from group", description = "Remove a user from a group")
    public ResponseEntity<GroupResponse> removeMember(
            @PathVariable Long id,
            @PathVariable Long userId) {
        return ResponseEntity.ok(groupService.removeMember(id, userId));
    }
}
