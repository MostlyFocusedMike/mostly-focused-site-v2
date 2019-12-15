import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../../Adapters';
import NoteTitle from '../NoteTitle';

const NoteTitles = () => {
    const [noteTitles, setNoteTitles] = useState(null);

    useEffect(() => {
        NoteAdapter.getAllTitles().then(setNoteTitles);
    }, []);

    return (
        <div id='note-titles'>
            <h2>My Notes</h2>
            <hr/>
            { noteTitles
                && <ul>
                    {
                        noteTitles.map(({ title, link }) => <NoteTitle
                            key={title}
                            title={title}
                            link={link}
                        />)
                    }
                </ul>
            }
        </div>
    );
};

export default NoteTitles;
