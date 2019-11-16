import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../Adapters';

const CurrentNote = ({ noteTitle }) => {
    const [currentText, setCurrentText] = useState(null);

    useEffect(() => {
        NoteAdapter.getOne(noteTitle).then(setCurrentText);
    });

    return (
        <div id='current-note'>
            <h2>{noteTitle}</h2>
            {
                currentText
                && <code>
                    {currentText}
                </code>
            }

        </div>
    );
};

CurrentNote.propTypes = {
    noteTitle: PropTypes.object,
};

export default CurrentNote;
