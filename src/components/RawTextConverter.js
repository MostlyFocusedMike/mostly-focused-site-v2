import React, { useState } from 'react';
import ArticleFormatter from '../ArticleFormatter';

const RawConverter = () => {
    const [rawText, setRawText] = useState('');

    const handleChange = (e) => {
        setRawText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullResponseObject = JSON.parse(rawText.slice(rawText.indexOf('{')));
        const rawArticles = fullResponseObject.payload.references.Post;
        console.log('rawArticles: ', rawArticles);
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
