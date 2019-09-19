package com.inertia.services.implementations;

import com.inertia.entities.Sprint;
import com.inertia.repositories.SprintRepository;
import com.inertia.services.interfaces.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("SprintService")
public class SprintServiceImpl implements SprintService {

    @Autowired
    SprintRepository sprintRepository;

    @Transactional
    @Override
    public void saveSprint(Sprint sprint) {
        sprintRepository.saveAndFlush(sprint);
    }

    @Override
    public void deleteSprint(Sprint sprint) {
        sprintRepository.delete(sprint);
    }

    @Override
    public Sprint getSprint(int id) {
        return sprintRepository.getOne(id);
    }

    @Override
    public List<Sprint> getAllSprints() {
        return sprintRepository.findAll();
    }
}
