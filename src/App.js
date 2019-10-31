import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from './Adapters';
import './App.css';
import ArticlesContainer from './components/Articles/ArticlesContainer';
import SearchBar from './components/SearchBar';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        ArticleAdapter.getAll()
            .then((jsonArticles) => {
                const foo = setArticles(jsonArticles);
                console.log('foo: ', foo);
            });
    }, []);

    return (
        <div className='App'>
            <WelcomeBanner />
            <SearchBar />
            {
                articles.length
                && <ArticlesContainer articles={articles}/>
            }
        </div>
    );
}

export default App;
