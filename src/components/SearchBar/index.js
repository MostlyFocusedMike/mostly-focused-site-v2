import React, { useState, useEffect } from 'react';
import { TagAdapter } from '../../Adapters';

const SearchBar = () => {
    const [tags, setTags] = useState([{
        name: 'Anything',
        slug: 'anything',
    }]);

    useEffect(() => {
        TagAdapter.getAll().then(setTags);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('e.target.value: ', e.target.value);
    };
    // control form
    // grab state
    // set context filter value
    // make tags adapter to grab possible values
    // filter the value in the articles component

    return (
        <form onSubmit={handleSubmit}>
            <div id="select-holder">
                <label htmlFor="tag-filter">find articles about: </label>
                <select id="tag-filter" >
                    {
                        tags.map(tag => (
                            <option key={tag.slug} value={tag.slug}>{tag.name}</option>
                        ))
                    }
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
    )
};

export default SearchBar;
