/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

const rawTextToJsonArticles = rawText => JSON.parse(rawText.slice(rawText.indexOf('{'))).payload.references.Post;

const checkForImage = imageId => (
    imageId
        ? `https://miro.medium.com/max/1400/${imageId}`
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/440px-Pictogram_voting_question.svg.png'
);

const formatTags = (tags) => {
    return tags.map(({ name, slug, postCount, metadata: { coverImage } }) => {
        return { name, slug, postCount, image: checkForImage(coverImage.id) };
    });
};

const formatArticle = (post) => {
    const {
        id,
        title,
        slug,
        uniqueSlug,
        virtuals: { previewImage: { imageId }, tags },
        content: { subtitle, metaDescription },
    } = post;

    return {
        id,
        title,
        slug,
        uniqueSlug,
        image: checkForImage(imageId),
        subtitle,
        metaDescription,
        tags: formatTags(tags),
    };
};

class ArticleFormatter {
    static getAll(articlesRaw) {
        return Object.keys(articlesRaw).map(article => formatArticle(articlesRaw[article]));
    }
}


const RawConverter = () => {
    const [rawText, setRawText] = useState('');

    const handleChange = (e) => {
        setRawText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullResponseObject = JSON.parse(rawText.slice(rawText.indexOf('{')));
        const rawArticles = fullResponseObject.payload.references.Post;
        const articles = ArticleFormatter.getAll(rawArticles);
        console.log('articles: ', articles);
    };


    return (
        <div id='home'>
            <h1>RawConverter</h1>
            <a href='https://medium.com/@mikecronin92/latest?format=json' target="_source">Go here and click cmd + a to select everything</a>
            <form
                onSubmit={handleSubmit}
            >
                <textarea id="raw-text-input" value={rawText} onChange={handleChange} />
                <input type='submit' value='Convert' />
            </form>
        </div>
    );
};

export default RawConverter;
