package com.oralis.userprogress.repository;

import com.oralis.userprogress.entity.Progress;
import com.oralis.userprogress.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    Optional<Progress> findByUser(User user);
    Optional<Progress> findByUserId(Long userId);
}
