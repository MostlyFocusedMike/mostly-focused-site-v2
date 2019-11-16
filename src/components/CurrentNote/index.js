import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import createMarkdown from '../../helpers/create-markdown';

const CurrentNote = ({ noteTitle, currentText }) => {
    return (
        <div id='current-note'>
            <div id='markdown'>
                <h2>{noteTitle}</h2>
                {
                    currentText
                    && <div
                        dangerouslySetInnerHTML={{ __html: createMarkdown(currentText) }}
                        id="preview-text"
                    >
                    </div>
                }
            </div>
        </div>
    );
};

CurrentNote.propTypes = {
    noteTitle: PropTypes.object,
    currentText: PropTypes.string,
};

export default CurrentNote;
