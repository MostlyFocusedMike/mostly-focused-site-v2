import React from 'react';
import PropTypes from 'prop-types';
import TagCard from '../TagCard';

const TagsContainer = ({ tags }) => {
    return (
        <div id='tags'>
            <h3>Tags:</h3>
            <hr />
            <ul>
                {
                    tags.map((tag, idx) => <TagCard tag={tag} key={`${idx}-${tag.slug}`} />)
                }
            </ul>
        </div>
    );
};

TagsContainer.propTypes = {
    tags: PropTypes.array,
};

export default TagsContainer;
