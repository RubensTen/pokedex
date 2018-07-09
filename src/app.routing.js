import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// page components
import { Login as LoginComponent } from './components/pages';

// routing function
const AppRouting = () => (
    <Router>
        <Route exact path="/" component={LoginComponent} />
    </Router>
);

export default AppRouting;