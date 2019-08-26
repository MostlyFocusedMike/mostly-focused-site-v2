import React, { useState, useEffect, useContext } from 'react';
import { TagAdapter } from '../../Adapters';
import appContext from '../../context';

const SearchBar = () => {
    const { chosenTag, setChosenTag } = useContext(appContext);
    const [tags, setTags] = useState([{
        name: 'Anything',
        slug: 'anything',
    }]);

    useEffect(() => {
        TagAdapter.getAll().then(setTags);
    }, []);

    useEffect(() => {
        console.log('tag: ', chosenTag);
    }, [chosenTag]);

    const handleChange = (e) => {
        setChosenTag(e.target.value);
    };

    const handleReset = (e) => {
        setChosenTag('anything');
    };

    return (
        <form>
            <p>
                Hello there, it&#39;s Mike.
            </p>
            <p>
                This is my site. <br />
            </p>
            <p>
                In theory, there should be more coming soon, but for now, here are my articles.
            </p>
            <br />
            <label htmlFor="tag-filter">Find articles about: </label>
            <select id="tag-filter" value={chosenTag} onChange={handleChange}>
                {
                    tags.map(tag => (
                        <option key={tag.slug} value={tag.slug}>{tag.name}</option>
                    ))
                }
            </select>
            <input type="button" value="Show All Articles" onClick={handleReset} />
        </form>
    );
};

export default SearchBar;
