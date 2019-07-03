package com.inertia.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Table(name = "SPRINT")
public class Sprint {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "SPRINT_ID")
    private int sprintId;

    @Column(name = "START_DATE")
    private Date startDate;

    @Column(name = "END_DATE")
    private Date endDate;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_STORY_ID", referencedColumnName = "USER_STORY_ID")
    private List<UserStory> stories;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "BUG_ID", referencedColumnName = "BUG_ID")
    private List<Bug> bugs;

    public int getSprintId() {
        return sprintId;
    }

    public void setSprintId(int sprintId) {
        this.sprintId = sprintId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public List<UserStory> getStories() {
        return stories;
    }

    public void setStories(List<UserStory> stories) {
        this.stories = stories;
    }

    public List<Bug> getBugs() {
        return bugs;
    }

    public void setBugs(List<Bug> bugs) {
        this.bugs = bugs;
    }
}
