import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import appContext from '../../context';

const ArticlesContainer = ({ articles }) => {
    const { chosenTag } = useContext(appContext);
    const filteredArticles = articles.filter((article) => (
        (chosenTag === 'anything') || (article.tags.findIndex(x => x.slug === chosenTag) > -1)
    ));

    return (
        <div id='articles-div'>
            <ul id='articles-ul'>
                {
                    filteredArticles.map((article) => (
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
