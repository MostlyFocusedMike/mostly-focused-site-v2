import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedSubtitle } from './helpers';
import TagsContainer from '../TagsContainer';

const ArticleCard = ({ article }) => {
    return (
        <li className="post-li" id={`post-${article.mediumID}-d`}>
            <a id={`post-${article.id}-img-link`} href={`${article.link}`}>
                <img id={`post-${article.id}-img`}src={`${article.image}`} />
                <h2 id={`post-${article.mediumID}-title`}>{article.title}</h2>
            </a>
            <p id={`post-${article.mediumID}-snippet`}>{getFormattedSubtitle(article.subtitle)}</p>
            <a className='link' href={article.link}>read article</a>
            <TagsContainer tags={article.tags}/>
        </li>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
