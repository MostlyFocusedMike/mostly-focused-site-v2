import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedSubtitle } from './helpers';

const ArticleCard = ({ article }) => {
    return (
        <li className="post-li" id={`post-${article.mediumID}-d`}>
            <a id={`post-${article.id}-img-link`} href={`${article.url}`}>
                <img id={`post-${article.id}-img`}src={`${article.image}`}alt={`${article.title} image`}/>
            </a>
            <h2 id={`post-${article.mediumID}-title`}>{article.title}</h2>
            <p id={`post-${article.mediumID}-snippet`}>{getFormattedSubtitle(article.subtitle)}</p>
            <a href={article.link}>read article</a>
        </li>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
