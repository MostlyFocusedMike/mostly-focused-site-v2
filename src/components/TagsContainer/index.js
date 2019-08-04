import React from 'react';
import PropTypes from 'prop-types';

const TagsContainer = ({ tags }) => {
    console.log('tags: ', tags);
    return (
        <ul id='tags-ul'>
            {
                tags.map((tag, idx) => {
                    return (
                        <li className='tag' key={`${idx}-${tag.slug}`}>
                            <input type='button' value={tag.name} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

TagsContainer.propTypes = {
    tags: PropTypes.array,
};

export default TagsContainer;
