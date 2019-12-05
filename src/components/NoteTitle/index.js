import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteTitle = ({ title, link }) => {
    return (
        <div className='note-title'>
            <Link to={link}>{title}</Link>
            <hr />
        </div>
    );
};

NoteTitle.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

export default NoteTitle;
