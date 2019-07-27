import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const TemporaryAlert = (props) => {
    // TODO add error class for styling
    const { msg, setIsAlertVisible, isAlertVisible } = props;

    useEffect(() => {
        if (isAlertVisible) setTimeout(() => setIsAlertVisible(false), 2000);
    }, [isAlertVisible])

    return (
        <div id='temporary-alert'>
            {
                isAlertVisible
                    ? <p>{ msg }</p>
                    : ''
            }
        </div>
    );
};

TemporaryAlert.propTypes = {
    msg: PropTypes.string,
    setIsAlertVisible: PropTypes.func,
    isAlertVisible: PropTypes.bool,
    isAlertError: PropTypes.bool,
};

export default TemporaryAlert;
