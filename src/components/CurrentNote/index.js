import React from 'react';
import PropTypes from 'prop-types';
import createMarkdown from '../../helpers/create-markdown';

const CurrentNote = ({ note: { title, text } }) => {
    return (
        <div id='current-note'>
            <div id='markdown'>
                <h2>{title}</h2>
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
