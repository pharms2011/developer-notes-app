package com.inertia.controllers;

import com.inertia.entities.UserStory;
import com.inertia.services.interfaces.UserStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/userStory")
@CrossOrigin(origins = "http://localhost:4200")
public class UserStoryController {

    @Autowired
    private UserStoryService userStoryService;

    @GetMapping("/getUserStory/{id}")
    public UserStory get(@PathVariable int id){
        return userStoryService.getUserStory(id);
    }

    @GetMapping("/getAllUserStories")
    public Iterable<UserStory> getAll(){
        return userStoryService.getAllUserStories();
    }

    @RequestMapping("/deleteUserStory")
    public void delete(@RequestParam  UserStory userStory){
        userStoryService.deleteUserStory(userStory);
    }

    @PostMapping("/saveUserStory")
    public boolean save(@RequestBody UserStory userStory){
        userStoryService.saveUserStory(userStory);
        return true;
    }
}
