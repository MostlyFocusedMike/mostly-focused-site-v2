import React from 'react';
import PropTypes from 'prop-types';

const CurrentNote = ({ noteTitle }) => {
    return (
        <div id='current-note'>
            <h2>{noteTitle}</h2>
        </div>
    );
};

CurrentNote.propTypes = {
    noteTitle: PropTypes.object,
};

export default CurrentNote;
