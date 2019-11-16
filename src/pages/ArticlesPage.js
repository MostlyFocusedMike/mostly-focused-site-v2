import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from '../Adapters';
import ArticlesContainer from '../components/Articles/ArticlesContainer';
import SearchBar from '../components/SearchBar';

function ArticlesPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        ArticleAdapter.getAll()
            .then((jsonArticles) => {
                setArticles(jsonArticles);
            });
    }, []);

    return (
        <div className='ArticlesPage'>
            <SearchBar />
            {
                articles.length
                && <ArticlesContainer articles={articles}/>
            }
        </div>
    );
}

export default ArticlesPage;
