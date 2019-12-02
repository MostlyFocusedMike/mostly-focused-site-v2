import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../Adapters';
import NoteTitles from '../../components/NoteTitles';
import CurrentNote from '../../components/CurrentNote';
import TableOfContents from '../../components/TableOfContents';

function NotesPage({ match }) {
    const [currentNote, setCurrentNote] = useState('hello');
    const [currentText, setCurrentText] = useState(null);

    useEffect(() => {
        NoteAdapter.getOne(currentNote).then(setCurrentText);
    }, [currentNote]);

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentNote(e.target.value);
    };

    return (
        <div id='notes-page'>
            <NoteTitles handleClick={handleClick} />
            <CurrentNote
                noteTitle={currentNote}
                currentText={currentText}
            />
            <TableOfContents text={currentText} />
        </div>
    );
}

NotesPage.propTypes = {
    match: PropTypes.object,
};

export default NotesPage;
