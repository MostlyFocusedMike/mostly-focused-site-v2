import React from 'react';
import PropTypes from 'prop-types';
import createMarkdown from '../../helpers/create-markdown';

const CurrentNote = ({ note: { title, text } }) => {
    return (
        <div id='current-note'>
            <h2 id="title">{title}</h2>
            <div id='markdown'>
                <div
                    id="preview-text"
                    dangerouslySetInnerHTML={{ __html: createMarkdown(text) }}
                >
                </div>
            </div>
        </div>
    );
};

CurrentNote.propTypes = {
    note: PropTypes.object,
};

export default CurrentNote;
