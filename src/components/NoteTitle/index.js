import React from 'react';
import PropTypes from 'prop-types';

const NoteTitle = ({ noteTitle, handleClick }) => {
    return (
        <div className='note-title'>
            <input
                type='button'
                value={noteTitle}
                onClick={handleClick}
            />
            <hr />
        </div>
    );
};

NoteTitle.propTypes = {
    noteTitle: PropTypes.object,
    handleClick: PropTypes.func,
};

export default NoteTitle;
