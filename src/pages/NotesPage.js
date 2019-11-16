import React, { useState, useEffect } from 'react';
import { NoteAdapter } from '../Adapters';
import NoteTitles from '../components/NoteTitles';

function ArticlesPage() {
    useEffect(() => {
        NoteAdapter.getOne('Express: Getting Started').then(console.log);
    }, []);

    useEffect(() => {
        NoteAdapter.getAllTitles().then(console.log);
    }, []);

    return (
        <div className='notes-page'>
            <h1>My Notes</h1>
            <NoteTitles />
        </div>
    );
}

export default ArticlesPage;
