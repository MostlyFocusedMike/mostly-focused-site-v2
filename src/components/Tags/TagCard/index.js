import React from 'react';
import PropTypes from 'prop-types';

const TagCard = ({ tag }) => {
    return (
        <li className='tag-li'>
            <input type='button' value={tag.name} />
        </li>
    );
};

TagCard.propTypes = {
    tag: PropTypes.object,
};

export default TagCard;
