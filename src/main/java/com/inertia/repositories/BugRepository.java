package com.inertia.repositories;

import com.inertia.entities.Bug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface BugRepository extends JpaRepository<Bug, Integer> {
}
