package com.inertia.services.interfaces;

import com.inertia.entities.Bug;

import java.util.List;

public interface BugService {
    public void deleteBug(int bugId);

    public void addBug(Bug bug);


    public Bug getBugById(int bugId);

    public List<Bug> getAll();

    public void saveBug(Bug bug);
}
