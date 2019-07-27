import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CopyToClipboard = (props) => {
    const { articles } = props;

    useEffect(() => {
        document.getElementById("json-articles").select();
        document.execCommand("copy");
    }, [articles]);

    return (
        <div id='copy-to-clipboard'>
            <textarea
                id='json-articles'
                style={{ position: 'fixed', top: '-100rem' }}
                readOnly
                value={JSON.stringify(articles, null, 4)}
            />
        </div>
    );
};

CopyToClipboard.propTypes = {
    articles: PropTypes.array,
};

export default CopyToClipboard;
