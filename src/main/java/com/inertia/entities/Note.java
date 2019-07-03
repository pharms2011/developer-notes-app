package com.inertia.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "NOTE")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "NOTE_ID")
    private int noteId;

    @Column(name = "PARENT_ID")
    private int parentId;

    @Column(name = "DATE")
    private Date date;

    @Column(name = "CONTENT")
    private String content;

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString(){
        return "ParentId: "+ this.parentId+"Note: "+this.content;
    }
}
