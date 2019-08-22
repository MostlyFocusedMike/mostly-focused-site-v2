import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyProvider from './context/ContextProvider';

ReactDOM.render(
    <MyProvider>
        <App />
    </MyProvider>,
    document.getElementById('root'),
);
