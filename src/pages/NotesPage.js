import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../Adapters';

function ArticlesPage() {
    useEffect(() => {
        NoteAdapter.getOne('test').then(console.log);
    }, []);

    useEffect(() => {
        NoteAdapter.getAllTitles().then(console.log);
    }, []);

    return (
        <div className='notes-page'>
            <h1>My Notes</h1>
        </div>
    );
}

export default ArticlesPage;
