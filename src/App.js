import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from './Adapters';
import './App.css';
import ArticlesContainer from './components/Articles/ArticlesContainer';
import SearchBar from './components/SearchBar';
import WelcomeBanner from './components/WelcomeBanner';
import MainComponent from './components/converter/MainComponent';

function App() {
    const [articles, setArticles] = useState([
        {
            mediumID: '',
            title: '',
            slug: '',
            link: '',
            image: '',
            subtitle: '',
            tags: [],
        },
    ]);

    useEffect(() => {
        ArticleAdapter.getAll()
            .then((jsonArticles) => {
                setArticles(jsonArticles);
            });
    }, []);

    return (
        <div className='App'>
            <WelcomeBanner />
            <SearchBar />
            <ArticlesContainer articles={articles}/>
            <MainComponent />
        </div>
    );
}

export default App;
