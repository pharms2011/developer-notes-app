package com.inertia.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "SPRINT")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Sprint {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "SPRINT_ID")
    private int sprintId;

    @Column(name = "SPRINT_DESC")
    private String sprintDesc;

    @Column(name = "SPRINT_CAP")
    private int sprintCapacity;

    @Column(name = "START_DATE")
    private Date startDate;

    @Column(name = "END_DATE")
    private Date endDate;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_ID", referencedColumnName = "SPRINT_ID")
    private List<UserStory> stories;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_ID", referencedColumnName = "SPRINT_ID")
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

    @JsonManagedReference
    public List<UserStory> getStories() {
        return stories;
    }

    public void setStories(List<UserStory> stories) {
        this.stories = stories;
    }

    @JsonManagedReference
    public List<Bug> getBugs() {
        return bugs;
    }

    public void setBugs(List<Bug> bugs) {
        this.bugs = bugs;
    }

    public int getSprintCapacity() {
        return sprintCapacity;
    }

    public void setSprintCapacity(int sprintICapacity) {
        this.sprintCapacity = sprintICapacity;
    }

    public String getSprintDesc() {
        return sprintDesc;
    }

    public void setSprintDesc(String sprintDesc) {
        this.sprintDesc = sprintDesc;
    }
}
