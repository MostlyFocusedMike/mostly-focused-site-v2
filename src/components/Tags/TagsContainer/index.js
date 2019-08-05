import React from 'react';
import PropTypes from 'prop-types';
import TagCard from '../TagCard';

const TagsContainer = ({ tags }) => {
    return (
        <ul id='tags-ul'>
            {
                tags.map((tag, idx) => <TagCard tag={tag} key={`${idx}-${tag.slug}`} />)
            }
        </ul>
    );
};

TagsContainer.propTypes = {
    tags: PropTypes.array,
};

export default TagsContainer;
