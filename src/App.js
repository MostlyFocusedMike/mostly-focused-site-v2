import React from 'react';
import './App.css';
import articleObjs from './articles';
import ArticleFormatter from './ArticleFormatter';

const articles = ArticleFormatter.getAll(articleObjs);

function App() {
    return (
        <div className="App">
            <h1>Hello there</h1>
            <textarea>
                {JSON.stringify(articles, null, 4)}
            </textarea>
        </div>
    );
}

export default App;
