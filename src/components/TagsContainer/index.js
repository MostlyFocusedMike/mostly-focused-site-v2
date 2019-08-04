import React from 'react';
import PropTypes from 'prop-types';

const TagsContainer = ({ tags }) => {
    console.log('tags: ', tags);
    return (
        <ul id='tags-ul'>
            <h2>tags</h2>
        </ul>
    );
};

TagsContainer.propTypes = {
    tags: PropTypes.array,
};

export default TagsContainer;
