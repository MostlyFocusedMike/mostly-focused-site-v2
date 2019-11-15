import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedSubtitle } from './helpers';
import TagsContainer from '../../Tags/TagsContainer';

const ArticleCard = ({ article }) => {
    const subtitle = getFormattedSubtitle(article.subtitle);
    return (
        <li>
            <div className="article-card" id={`post-${article.medium_id}-d`}>
                <a id={`post-${article.id}-img-link`} href={`${article.link}`} target="_blank" rel="noopener noreferrer" >
                    <img
                        id={`post-${article.id}-img`}
                        src={`${article.image}`}
                        alt={`"${article.title}" article`}
                    />
                    <h2 id={`post-${article.medium_iD}-title`}>{article.title}</h2>
                    {
                        subtitle
                        && <p id={`post-${article.medium_id}-subtitle`}>{subtitle}</p>
                    }
                </a>
                <a className='link' href={article.link} target="_blank" rel="noopener noreferrer" >READ ARTICLE</a>
            </div>

            <TagsContainer tags={article.tags}/>
        </li>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
