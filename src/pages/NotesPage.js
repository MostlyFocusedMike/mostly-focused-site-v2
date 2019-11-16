import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../Adapters';
import NoteTitles from '../components/NoteTitles';
import CurrentNote from '../components/CurrentNote';

function ArticlesPage() {
    const [currentNote, setCurrentNote] = useState('# Click a Note');

    useEffect(() => {
        NoteAdapter.getOne('Express: Getting Started').then(console.log);
    }, []);

    useEffect(() => {
        NoteAdapter.getAllTitles().then(console.log);
    }, []);

    useEffect(() => {
        console.log(currentNote);
    }, [currentNote]);

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentNote(e.target.value);
    };

    return (
        <div className='notes-page'>
            <h1>My Notes</h1>
            <NoteTitles
                handleClick={handleClick}
            />
            <CurrentNote
                noteTitle={currentNote}
            />
        </div>
    );
}

export default ArticlesPage;
