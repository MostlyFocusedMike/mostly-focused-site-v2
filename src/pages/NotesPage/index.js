import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../../Adapters';
import NoteTitles from '../../components/NoteTitles';
import CurrentNote from '../../components/CurrentNote';
import TableOfContents from '../../components/TableOfContents';

function ArticlesPage() {
    const [currentNote, setCurrentNote] = useState('hello');

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
        <div id='notes-page'>
            <NoteTitles
                handleClick={handleClick}
            />
            <CurrentNote
                noteTitle={currentNote}
            />
            <TableOfContents />
        </div>
    );
}

export default ArticlesPage;
