package com.inertia.controllers;

import com.inertia.entities.Bug;
import com.inertia.services.interfaces.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/bug")
public class BugController {

    @Autowired
    private static BugService bugService;

    @RequestMapping("/getBug")
    public Bug get(@RequestParam int id){
        return bugService.getBugById(id);
    }

    @RequestMapping("/getAllBugs")
    public List<Bug> getAll(){
        return bugService.getAll();
    }

    @RequestMapping("/deleteBug")
    public boolean delete(@RequestParam  Bug bug){
        bugService.deleteBug(bug.getBugId());
        return true;
    }

    @RequestMapping("/saveBug")
    public boolean save(@RequestParam Bug bug){
        bugService.saveBug(bug);
        return true;
    }

}
