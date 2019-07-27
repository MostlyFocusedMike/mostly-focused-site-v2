/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

class ArticlesConverter {
    constructor(rawText, userHandle) {
        this.userHandle = userHandle;
        this.rawText = rawText;
        return this.articles;
    }

    checkForImage = (imageId) => (
        imageId
            ? `https://miro.medium.com/max/1400/${imageId}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/440px-Pictogram_voting_question.svg.png'
    );

    formatTags = (tags) => tags.map(({ name, slug }) => ({ name, slug }))

    formatArticle = (rawArticle) => {
        const {
            id,
            title,
            slug,
            uniqueSlug,
            virtuals: { previewImage: { imageId }, tags },
            content: { subtitle, metaDescription },
        } = rawArticle;

        const link = `https://medium.com/@${this.userHandle}/${uniqueSlug}`;

        return {
            id,
            title,
            slug,
            link,
            image: this.checkForImage(imageId),
            subtitle,
            metaDescription,
            tags: this.formatTags(tags),
        };
    };

    get jsonArticles() {
        return JSON.parse(this.rawText.slice(this.rawText.indexOf('{'))).payload.references.Post;
    }

    get articles() {
        return Object.keys(this.jsonArticles).map(article => this.formatArticle(this.jsonArticles[article]));
    }
}


const RawConverter = () => {
    const [rawText, setRawText] = useState('');

    const handleChange = (e) => {
        setRawText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const articles = new ArticlesConverter(rawText, 'mikecronin92');
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
