package com.inertia.services.interfaces;

import com.inertia.entities.Sprint;

import java.util.List;

public interface SprintService {

    public void saveSprint(Sprint sprint);

    public void deleteSprint(Sprint sprint);

    public Sprint getSprint(int id);

    public List<Sprint> getAllSprints();

}
