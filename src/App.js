import React, { useState, useEffect } from 'react';
import { ArticleAdapter } from './Adapters';
import './App.css';
import ArticlesContainer from './components/Articles/ArticlesContainer';

function App() {
    const [articles, setArticles] = useState([
        {
            mediumID: '',
            title: '',
            slug: '',
            link: '',
            image: '',
            subtitle: '',
            tags: [],
        },
    ]);

    useEffect(() => {
        ArticleAdapter.getAll()
            .then((jsonArticles) => {
                setArticles(jsonArticles);
            });
    }, []);

    return (
        <div className='App'>
            <form action="post">
                <div id="select-holder">
                    <label htmlFor="sorting-buttons">find articles about: </label>
                    <select id="sorting-buttons" >
                        <option value="all">Anything</option>
                        <option value="ruby">Ruby</option>
                        <option value="js">Javascript</option>
                        <option value="databases">Databases</option>
                    </select>
                    <div id="fake-border">
                        <br />
                    </div>
                    <div id="arrows-holder">
                        <div id="arrows">
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <input type="submit" name="" id="" value="Sort Articles" />
            </form>
            <ArticlesContainer articles={articles}/>
        </div>
    );
}

export default App;
