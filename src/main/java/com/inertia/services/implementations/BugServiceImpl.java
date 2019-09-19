package com.inertia.services.implementations;

import com.inertia.entities.Bug;
import com.inertia.repositories.BugRepository;
import com.inertia.services.interfaces.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("BugService")
public class BugServiceImpl implements BugService {

    @Autowired
    BugRepository bugRepository;

    @Override
    public void deleteBug(int bugId) {
        Bug bug = bugRepository.getOne(bugId);
        bugRepository.delete(bug);
    }

    @Override
    public void addBug(Bug bug) {
        bugRepository.save(bug);
    }

    @Override
    public Bug getBugById(int bugId) {
        return bugRepository.getOne(bugId);
    }

    @Override
    public List<Bug> getAll() {
        return bugRepository.findAll();
    }

    @Override
    public void saveBug(Bug bug) {
        bugRepository.save(bug);
    }
}
