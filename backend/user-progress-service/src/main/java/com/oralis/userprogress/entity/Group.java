package com.oralis.userprogress.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "groups")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"members", "hibernateLazyInitializer", "handler"})
public class Group {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @ManyToOne
    @JoinColumn(name = "establishment_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Establishment establishment;
    
    @ManyToOne
    @JoinColumn(name = "trainer_id")
    @JsonIgnoreProperties({"group", "establishment", "password"})
    private User trainer;
    
    @OneToMany(mappedBy = "group")
    private Set<User> members = new HashSet<>();
}
