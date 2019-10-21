import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from './Adapters';
import './App.css';
import ArticlesContainer from './components/Articles/ArticlesContainer';
import SearchBar from './components/SearchBar';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
    const [articles, setArticles] = useState([
        {
            id: 0,
            medium_id: '',
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
        </div>
    );
}

export default App;
