import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../../Adapters';
import NoteTitles from '../../components/NoteTitles';
import CurrentNote from '../../components/CurrentNote';
import TableOfContents from '../../components/TableOfContents';

function ArticlesPage() {
    const [currentNote, setCurrentNote] = useState('hello');
    const [currentText, setCurrentText] = useState(null);

    useEffect(() => {
        NoteAdapter.getOne(currentNote).then(setCurrentText);
    }, [currentNote]);

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
                currentText={currentText}
            />
            <TableOfContents text={currentText} />
        </div>
    );
}

export default ArticlesPage;
