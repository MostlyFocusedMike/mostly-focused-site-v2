import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import appContext from '../../../context';

const TagCard = ({ tag }) => {
    const { setChosenTag } = useContext(appContext);

    const handleClick = (e) => {
        setChosenTag(e.target.dataset.value);
    };

    return (
        <li className='tag-li'>
            <input
                type='button'
                value={tag.name}
                data-value={tag.slug}
                onClick={handleClick}
            />
        </li>
    );
};

TagCard.propTypes = {
    tag: PropTypes.object,
};

export default TagCard;
