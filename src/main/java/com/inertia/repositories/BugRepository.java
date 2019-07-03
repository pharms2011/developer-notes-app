package com.inertia.repositories;

import com.inertia.entities.Bug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BugRepository extends JpaRepository<Bug, Integer> {
}
