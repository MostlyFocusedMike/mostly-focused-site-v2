import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from '../Adapters';
import ArticleCard from './ArticleCard';

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
            <ul>
                {
                    articles.map((article) => (
                        <ArticleCard
                            article={article}
                            key={article.mediumID}
                        />

                    ))
                }
            </ul>

        </div>
    );
};

export default ArticlesContainer;
