import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ArticlesPage from '../pages/ArticlesPage';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component = { ArticlesPage }
            />
        </Switch>
    );
};

export default Routes;
