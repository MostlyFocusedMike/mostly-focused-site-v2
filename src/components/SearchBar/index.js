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
    // make tags adapter to grab possible values
    // filter the value in the articles component

    return (
        <form onChange={handleChange}>
            <div id="select-holder">
                <label htmlFor="tag-filter">find articles about: </label>
                <select id="tag-filter" value={chosenTag}>
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
        </form>
    );
};

export default SearchBar;
