package com.oralis.userprogress.service;

import com.oralis.userprogress.dto.EstablishmentRequest;
import com.oralis.userprogress.dto.EstablishmentResponse;
import com.oralis.userprogress.entity.Establishment;
import com.oralis.userprogress.exception.ResourceNotFoundException;
import com.oralis.userprogress.repository.EstablishmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EstablishmentService {
    
    private final EstablishmentRepository establishmentRepository;
    
    public List<EstablishmentResponse> getAllEstablishments() {
        return establishmentRepository.findAll().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }
    
    public EstablishmentResponse getEstablishmentById(Long id) {
        Establishment establishment = establishmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Establishment not found with id: " + id));
        return toResponse(establishment);
    }
    
    @Transactional
    public EstablishmentResponse createEstablishment(EstablishmentRequest request) {
        Establishment establishment = new Establishment();
        establishment.setName(request.getName());
        establishment.setAddress(request.getAddress());
        
        Establishment saved = establishmentRepository.save(establishment);
        return toResponse(saved);
    }
    
    @Transactional
    public EstablishmentResponse updateEstablishment(Long id, EstablishmentRequest request) {
        Establishment establishment = establishmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Establishment not found with id: " + id));
        
        establishment.setName(request.getName());
        establishment.setAddress(request.getAddress());
        
        Establishment updated = establishmentRepository.save(establishment);
        return toResponse(updated);
    }
    
    @Transactional
    public void deleteEstablishment(Long id) {
        if (!establishmentRepository.existsById(id)) {
            throw new ResourceNotFoundException("Establishment not found with id: " + id);
        }
        establishmentRepository.deleteById(id);
    }
    
    private EstablishmentResponse toResponse(Establishment establishment) {
        EstablishmentResponse response = new EstablishmentResponse();
        response.setId(establishment.getId());
        response.setName(establishment.getName());
        response.setAddress(establishment.getAddress());
        response.setCreatedAt(establishment.getCreatedAt());
        return response;
    }
}
