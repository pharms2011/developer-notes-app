package com.inertia.controllers;

import com.inertia.entities.Sprint;
import com.inertia.services.interfaces.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sprint")
@CrossOrigin(origins = "http://localhost:4200")
public class SprintController {

    @Autowired
    private SprintService sprintService;

    @GetMapping("getAllSprints")
    public List<Sprint> getAll(){
        return sprintService.getAllSprints();
    }

    @GetMapping("getSprint/{id}")
    public Sprint get(@PathVariable int id){
        return sprintService.getSprint(id);
    }

    @PostMapping("saveSprint")
    public void save(@RequestBody Sprint sprint){
        System.out.println("Sprint created with description " + sprint.getSprintDesc());
        sprintService.saveSprint(sprint);
    }

    @PostMapping("deleteSprint")
    public boolean delete(@PathVariable Sprint sprint){
        sprintService.deleteSprint(sprint);
        return true;
    }
}
