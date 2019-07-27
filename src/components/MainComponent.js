import React, { useState, useEffect } from 'react';
import ArticlesConverter from '../ArticlesConverter';
import RawTextConverter from './RawTextConverter';
import CopyToClipboard from './CopyToClipboard';

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

    useEffect(() => {
        document.getElementById("json-articles").select();
        document.execCommand("copy");
    }, [articles]);

    return (
        <div id='main-component'>
            <h1>MainComponent</h1>
            <RawTextConverter
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                rawText = {rawText}
            />
            <CopyToClipboard articles={articles} />
        </div>
    );
};

export default MainComponent;
