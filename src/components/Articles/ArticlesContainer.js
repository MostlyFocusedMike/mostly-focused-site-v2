import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticlesContainer = ({ articles }) => {
    return (
        <div id='articles-div'>
            <h1>My Articles</h1>
            <ul id='articles-ul'>
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

ArticlesContainer.propTypes = {
    articles: PropTypes.array,
};

export default ArticlesContainer;
