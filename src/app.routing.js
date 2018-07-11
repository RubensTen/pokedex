import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// page lazy components
import {
    Home as HomeComponent,
    Login as LoginComponent,
    NotFound as NotFoundComponent
} from './providers/lazyLoader';
/* import { Home as HomeComponent } from './components/pages/home';
import { Login as LoginComponent } from './components/pages/login'; */

// routing function
const AppRouting = () => (
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="*" component={NotFoundComponent} />
            </Switch>
        </React.Fragment>
    </Router>
);

export default AppRouting;