package com.inertia.entities;


import javax.persistence.*;
import java.util.List;

@Table(name = "USER_STORY")
public class UserStory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "NOTE_ID")
    private int userStoryId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "PARENT_ID", referencedColumnName = "PARENT_ID")
    private List<Task> tasks;

    @Column(name = "JIRA_ID")
    private String jiraId;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "ESTIMATE")
    private int estimate;

    public int getUserStoryId() {
        return userStoryId;
    }

    public void setUserStoryId(int userStoryId) {
        this.userStoryId = userStoryId;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public String getJiraId() {
        return jiraId;
    }

    public void setJiraId(String jiraId) {
        this.jiraId = jiraId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getEstimate() {
        return estimate;
    }

    public void setEstimate(int estimate) {
        this.estimate = estimate;
    }
}
