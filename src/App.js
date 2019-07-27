import React from 'react';
import './App.css';
import { ArticleAdapter } from './adapters';

ArticleAdapter.getAll().then(console.log);

function App() {
    return (
        <div className="App">
            <h1>Hello there</h1>
        </div>
    );
}

export default App;
