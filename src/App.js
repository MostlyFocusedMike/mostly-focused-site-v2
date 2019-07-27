import React from 'react';
import './App.css';
import articleObjs from './articles';
import ArticleFormatter from './ArticleFormatter';
import RawTextConverter from './components/RawTextConverter';

// const articles = ArticleFormatter.getAll(articleObjs);

function App() {
    return (
        <div className="App">
            <h1>Hello there</h1>
            <RawTextConverter />
            <textarea
            />
        </div>
    );
}

export default App;
