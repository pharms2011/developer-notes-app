package com.inertia.services.implimentations;

import com.inertia.entities.Note;
import com.inertia.repositories.NoteRepository;
import com.inertia.services.interfaces.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("noteService")
public class NoteServiceImpl implements NoteService {

    @Autowired
    NoteRepository noteRepository;

    @Override
    public void deleteNote(int noteId) {
        noteRepository.deleteById(noteId);
    }

    @Override
    public void addNote(Note note) {
        noteRepository.save(note);

    }

    @Override
    public void getNoteByParent(int parentId) {
        noteRepository.findAllById()
    }

    @Override
    public void getNoteById(int noteId) {

    }

    @Override
    public void saveNote(Note note) {

    }
}
