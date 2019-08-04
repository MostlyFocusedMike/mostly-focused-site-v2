import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from '../Adapters';

const ArticlesContainer = () => {
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
        <div id='articles-container'>
            <h1>My Articles</h1>
            {
                articles.map(article => {
                    return <p key={article.mediumID}>{article.title}</p>;
                })
            }
        </div>
    );
};

export default ArticlesContainer;
