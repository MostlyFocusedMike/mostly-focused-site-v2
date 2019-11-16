import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../../Adapters';

const NoteTitles = () => {
    const [noteTitles, setNoteTitles] = useState(null);
    useEffect(() => {
        NoteAdapter.getAllTitles().then(setNoteTitles);
    }, []);

    return (
        <div id='note-titles'>
            { noteTitles
                && <ul>
                    {
                        noteTitles.map(title => {
                            return <h2 key={title}>{title}</h2>;
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default NoteTitles;
