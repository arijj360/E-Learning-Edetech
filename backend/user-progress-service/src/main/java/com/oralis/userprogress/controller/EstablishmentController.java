package com.oralis.userprogress.controller;

import com.oralis.userprogress.dto.EstablishmentRequest;
import com.oralis.userprogress.dto.EstablishmentResponse;
import com.oralis.userprogress.service.EstablishmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/establishments")
@RequiredArgsConstructor
@Tag(name = "Establishments", description = "Establishment management endpoints")
public class EstablishmentController {
    
    private final EstablishmentService establishmentService;
    
    @GetMapping
    @Operation(summary = "Get all establishments", description = "Retrieve all establishments")
    public ResponseEntity<List<EstablishmentResponse>> getAllEstablishments() {
        return ResponseEntity.ok(establishmentService.getAllEstablishments());
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get establishment by ID", description = "Retrieve a specific establishment by ID")
    public ResponseEntity<EstablishmentResponse> getEstablishmentById(@PathVariable Long id) {
        return ResponseEntity.ok(establishmentService.getEstablishmentById(id));
    }
    
    @PostMapping
    @Operation(summary = "Create establishment", description = "Create a new establishment")
    public ResponseEntity<EstablishmentResponse> createEstablishment(@Valid @RequestBody EstablishmentRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(establishmentService.createEstablishment(request));
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update establishment", description = "Update an existing establishment")
    public ResponseEntity<EstablishmentResponse> updateEstablishment(
            @PathVariable Long id,
            @Valid @RequestBody EstablishmentRequest request) {
        return ResponseEntity.ok(establishmentService.updateEstablishment(id, request));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete establishment", description = "Delete an establishment by ID")
    public ResponseEntity<Void> deleteEstablishment(@PathVariable Long id) {
        establishmentService.deleteEstablishment(id);
        return ResponseEntity.noContent().build();
    }
}
