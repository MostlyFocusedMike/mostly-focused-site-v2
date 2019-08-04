import React from 'react';
import './App.css';
import MainComponent from './components/converter/MainComponent';
import ArticlesContainer from './components/ArticlesContainer';

function App() {
    return (
        <div className="App">
            <ArticlesContainer />
            <MainComponent />
        </div>
    );
}

export default App;
