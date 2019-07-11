package com.inertia.services.interfaces;

import com.inertia.entities.Note;

public interface NoteService {

    public void deleteNote(int noteId);

    public void addNote(Note note);

    public void getNoteByParent(int parentId);

    public void getNoteById(int noteId);

    public void saveNote(Note note);
}
