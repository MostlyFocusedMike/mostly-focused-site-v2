import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from '../Adapters';

const ArticlesContainer = () => {
    ArticleAdapter.getAll()
        .then(console.log);
    return (
        <div id="articles-container">
            <h1>My Articles</h1>
        </div>
    );
};

export default ArticlesContainer;
