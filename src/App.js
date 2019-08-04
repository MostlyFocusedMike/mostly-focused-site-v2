import React from 'react';
import './App.css';
import MainComponent from './components/converter/MainComponent';
import { ArticleAdapter } from './Adapters';

function App() {
    ArticleAdapter.getAll()
        .then(console.log);
    return (
        <div className="App">
            <h1>Hello there</h1>
            <MainComponent />
        </div>
    );
}

export default App;
