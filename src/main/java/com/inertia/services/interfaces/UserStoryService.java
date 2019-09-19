package com.inertia.services.interfaces;


import com.inertia.entities.UserStory;

import java.util.List;

public interface UserStoryService {

    public void saveUserStory(UserStory userStory);

    public void deleteUserStory(UserStory userStory);

    public UserStory getUserStory(int id);

    public List<UserStory> getAllUserStories();

}
