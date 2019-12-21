import React, { useState, useEffect } from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

const TableOfContents = ({ text }) => {
    const [tableContents, setTableContents] = useState(null);

    /** convert headings into table of contents */
    const setHeadings = (headings) => {
        const newTableContents = headings.map((markdown) => {
            const match = markdown.match(/<h(1|2|3) id="(.+)">(.+)</);
            const filteredContentText = match[3].replace(/<\/?code>/g, '');
            return {
                padding: match[1],
                link: match[2],
                contentText: filteredContentText,
            };
        });
        setTableContents(newTableContents);
    };

    /** see if there are any headings to convert */
    useEffect(() => {
        if (text) {
            const headings = marked(text).match(/<h(?:1|2|3).+>.+</g);
            if (headings) {
                setHeadings(headings);
            } else {
                setTableContents(null);
            }
        }
    }, [text]);

    return (
        <div id='table-of-contents'>
            <h2>Table Of Contents</h2>
            <ul id="contents">
                {
                    tableContents
                    && tableContents.map(({ padding, link, contentText }) => (
                        <li className={`padding-lvl-${padding}`} key={link}>
                            <a href={`#${link}`}>{contentText}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

TableOfContents.propTypes = {
    text: PropTypes.string,
};

export default TableOfContents;
