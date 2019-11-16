import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TableOfContents = ({ text }) => {
    const [contents, setContents] = useState(null);

    return (
        <div id='table-of-contents'>
            <h2>Table Of Contents</h2>
        </div>
    );
};

TableOfContents.propTypes = {
    text: PropTypes.string,
};

export default TableOfContents;
