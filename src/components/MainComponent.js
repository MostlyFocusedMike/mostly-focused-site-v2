import React, { useState, useEffect } from 'react';
import RawTextConverter from './RawTextConverter';
import ArticlesConverter from '../ArticlesConverter';

const MainComponent = () => {
    const [rawText, setRawText] = useState('');
    const [articles, setArticles] = useState([]);

    const handleChange = (e) => {
        setRawText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setArticles(new ArticlesConverter(rawText, 'mikecronin92'));
    };

    return (
        <div id='main-component'>
            <h1>MainComponent</h1>
            <RawTextConverter
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                rawText = {rawText}
            />
            <textarea
                value={JSON.stringify(articles, null, 4)}
            />
        </div>
    );
};

export default MainComponent;
