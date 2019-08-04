import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
    return (
        <li id="article-card">
            <h2>{article.title}</h2>
        </li>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
