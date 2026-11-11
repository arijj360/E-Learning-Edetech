package com.oralis.userprogress.repository;

import com.oralis.userprogress.entity.Role;
import com.oralis.userprogress.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(Role role);
    List<User> findByGroupId(Long groupId);
    boolean existsByEmail(String email);
}
