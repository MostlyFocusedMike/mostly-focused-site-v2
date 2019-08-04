import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TemporaryAlert from './TemporaryAlert';

const CopyToClipboard = (props) => {
    const { articles } = props;
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isAlertError, setIsAlertError] = useState(false);

    useEffect(() => {
        if (articles.length) {
            try {
                document.getElementById('json-articles').select();
                document.execCommand('copy');
                setIsAlertError(false);
                setIsAlertVisible(true);
            } catch (error) {
                console.log('error: ', error);
                setIsAlertError(true);
            }
            setIsAlertVisible(true);
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
            <TemporaryAlert
                msg={isAlertError ? 'Something went wrong with copying the JSON to the clipboard' : 'JSON successfully saved to your clipboard!'}
                setIsAlertVisible={setIsAlertVisible}
                isAlertVisible={isAlertVisible}
                isAlertError={isAlertError}
            />
        </div>
    );
};

CopyToClipboard.propTypes = {
    articles: PropTypes.array,
};

export default CopyToClipboard;
