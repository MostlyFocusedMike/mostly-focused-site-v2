import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TemporaryAlert from './TemporaryAlert';

const CopyToClipboard = (props) => {
    const { articles } = props;
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const showAlert = () => {
        setIsAlertVisible(true);
        setTimeout(() => setIsAlertVisible(false), 2000);
    };

    useEffect(() => {
        if (articles.length) {
            try {
                document.getElementById('json-articles').select();
                document.execCommand('copy');
                showAlert();
            } catch (error) {
                console.log('error: ', error);
            }
        }
    }, [articles]);


    return (
        <div id='copy-to-clipboard'>
            <textarea
                id='json-articles'
                style={{ position: 'fixed', top: '-100rem' }}
                readOnly
                value={JSON.stringify(articles, null, 4)}
            />
            {
                isAlertVisible
                    ? <TemporaryAlert />
                    : ''
            }
        </div>
    );
};

CopyToClipboard.propTypes = {
    articles: PropTypes.array,
};

export default CopyToClipboard;
