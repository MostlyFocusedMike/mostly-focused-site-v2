import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import appContext from '../../context';

const ArticlesContainer = ({ articles }) => {
    const { chosenTag } = useContext(appContext);
    const filteredArticles = (chosenTag === 'anything')
        ? articles
        : articles.filter((article) => article.tags.some(x => x.slug === chosenTag));

    return (
        <div id='articles-div'>
            <ul id='articles-ul'>
                {
                    filteredArticles.length
                    && filteredArticles.map((article) => (
                        <ArticleCard
                            article={article}
                            key={article.id}
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
