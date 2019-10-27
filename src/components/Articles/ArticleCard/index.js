import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedSubtitle } from './helpers';
import TagsContainer from '../../Tags/TagsContainer';

const ArticleCard = ({ article }) => {
    console.log('article: ', article);
    const subtitle = getFormattedSubtitle(article.subtitle);
    return (
        <li>
            <a id={`post-${article.id}-img-link`} href={`${article.link}`} target="_blank" rel="noopener noreferrer" >
                <div className="article-card" id={`post-${article.medium_id}-d`}>
                    <img id={`post-${article.id}-img`}src={`${article.image}`} />
                    <h2 id={`post-${article.medium_iD}-title`}>{article.title}</h2>
                    {
                        subtitle
                        && <p id={`post-${article.medium_id}-subtitle`}>{subtitle}</p>
                    }
                    <a className='link' href={article.link} target="_blank" rel="noopener noreferrer" >READ ARTICLE</a>
                </div>
            </a>

            <TagsContainer tags={article.tags}/>
        </li>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default ArticleCard;
