import React from 'react';

const RawConverter = () => {
    return (
        <div id='home'>
            <h1>RawConverter</h1>
            <a href='https://medium.com/@mikecronin92/latest?format=json' target="_source">Go here and click cmd + a to select everything</a>
            <form>
                <textarea id="raw-text-input" placeholder='put the raw text output here'></textarea>
                <input type='submit' value='Convert' />
            </form>
        </div>
    );
};

export default RawConverter;
