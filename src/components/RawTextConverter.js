import React from 'react';
import PropTypes from 'prop-types';

const RawConverter = ({ rawText, handleChange, handleSubmit }) => {

    return (
        <div id='home'>
            <h1>RawConverter</h1>
            <a href='https://medium.com/@mikecronin92/latest?format=json' target="_source">Go here and click cmd + a to select everything</a>
            <form
                onSubmit={handleSubmit}
            >
                <textarea id="raw-text-input" value={rawText} onChange={handleChange} />
                <input type='submit' value='Convert' />
            </form>
        </div>
    );
};

RawConverter.propTypes = {
    rawText: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default RawConverter;
