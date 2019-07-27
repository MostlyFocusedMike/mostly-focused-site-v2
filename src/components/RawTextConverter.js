/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import ArticlesConverter from '../ArticlesConverter';

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
