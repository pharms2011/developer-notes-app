package com.inertia.services.implementations;

import com.inertia.entities.UserStory;
import com.inertia.repositories.UserStoryRepository;
import com.inertia.services.interfaces.UserStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserStoryServiceImpl implements UserStoryService {

    @Autowired
    UserStoryRepository userStoryRepository;

    @Override
    public void saveUserStory(UserStory userStory) {
        userStoryRepository.save(userStory);
    }

    @Override
    public void deleteUserStory(UserStory userStory) {
        userStoryRepository.delete(userStory);
    }

    @Override
    public UserStory getUserStory(int id) {
        return userStoryRepository.getOne(id);
    }

    @Override
    public List<UserStory> getAllUserStories() {
        return userStoryRepository.findAll();
    }
}
