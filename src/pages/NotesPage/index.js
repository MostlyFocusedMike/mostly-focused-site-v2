/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../Adapters';
import NoteTitles from '../../components/NoteTitles';
import CurrentNote from '../../components/CurrentNote';
import TableOfContents from '../../components/TableOfContents';

const NotesPage = ({ match: { params } }) => {
    const [note, setNote] = useState(null); // shape: {title, text}
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        NoteAdapter.getOne(params.note)
            .then(res => {
                if (res.notFound) {
                    setRedirect(true);
                } else {
                    setNote(res);
                }
            });
    }, [note, params]);

    return (
        <div id='notes-page'>
            { redirect && <Redirect to='/notes' /> }
            {
                note && <>
                    <NoteTitles />
                    {/* <CurrentNote note={note} /> */}
                    <TableOfContents text={note.text} />
                </>
            }
        </div>
    );
}

NotesPage.propTypes = {
    match: PropTypes.object,
};

export default NotesPage;
