import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NoteAdapter } from '../../Adapters';
import NoteTitle from '../NoteTitle';

const NoteTitles = ({ handleClick }) => {
    const [noteTitles, setNoteTitles] = useState(null);
    useEffect(() => {
        NoteAdapter.getAllTitles().then(setNoteTitles);
    }, []);

    return (
        <div id='note-titles'>
            { noteTitles
                && <ul>
                    {
                        noteTitles.map(({ file, link }) => <NoteTitle
                            key={file}
                            noteTitle={file}
                            noteLink={link}
                        />)
                    }
                </ul>
            }
        </div>
    );
};

NoteTitles.propTypes = {
    handleClick: PropTypes.func,
};

export default NoteTitles;
