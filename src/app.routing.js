import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// page components
import { Home as HomeComponent } from './components/pages/home';
import { Login as LoginComponent } from './components/pages/login';

// routing function
const AppRouting = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/login" component={LoginComponent} />
        </div>
    </Router>
);

export default AppRouting;