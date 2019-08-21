import React from 'react';
import { TagAdapter } from '../../Adapters';

const tags = TagAdapter.getAll().then(console.log);

const SearchBar = () => {
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
    )
};

export default SearchBar;
