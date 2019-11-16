import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ArticlesPage from '../pages/ArticlesPage';
import NotesPage from '../pages/NotesPage';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component = { ArticlesPage }
            />
            <Route
                exact path='/notes'
                component = { NotesPage }
            />
        </Switch>
    );
};

export default Routes;
