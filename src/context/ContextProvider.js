import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '.';

const MyProvider = (props) => {
    const [chosenTag, setChosenTag] = useState('anything');

    const context = {
        chosenTag,
        setChosenTag,
    };

    return (
        <AppContext.Provider value={ context }>
            {props.children}
        </AppContext.Provider>
    );
}

MyProvider.propTypes = {
    children: PropTypes.object,
};


export default MyProvider;
