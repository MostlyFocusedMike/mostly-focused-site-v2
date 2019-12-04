/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../Adapters';
import NoteTitles from '../../components/NoteTitles';
import CurrentNote from '../../components/CurrentNote';
import TableOfContents from '../../components/TableOfContents';

const NotesPage = ({ match: { params } }) => {
    const [currentNote, setCurrentNote] = useState('home');
    const [redirect, setRedirect] = useState(false);
    const [currentText, setCurrentText] = useState(null);

    useEffect(() => {
        NoteAdapter.getOne(params.note || currentNote)
            .then(res => {
                res.notFound
                    ? setRedirect(true)
                    : setCurrentText(res.text);
            });
    }, [currentNote, params]);

    const handleClick = (e) => {
        e.preventDefault();
        setCurrentNote(e.target.value);
    };

    return (
        <div id='notes-page'>
            { redirect && <Redirect to='/notes' /> }
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
