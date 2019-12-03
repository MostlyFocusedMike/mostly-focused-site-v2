import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteTitle = ({ noteTitle, noteLink }) => {
    return (
        <div className='note-title'>
            <Link to={`/notes/${noteLink}`}>{noteTitle}</Link>
            <hr />
        </div>
    );
};

NoteTitle.propTypes = {
    noteTitle: PropTypes.string,
    noteLink: PropTypes.string,
};

export default NoteTitle;
