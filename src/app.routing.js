import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// common components
import { Header as HeaderComponent } from './components/common/header';
import { Footer as FooterComponent } from './components/common/footer';

// page lazy components
import {
    Home as HomeComponent,
    Shop as ShopComponent,
    About as AboutComponent,
    Contact as ContactComponent,
    Login as LoginComponent,
    NotFound as NotFoundComponent
} from './providers/lazyLoader';
/* import { Home as HomeComponent } from './components/pages/home';
import { Login as LoginComponent } from './components/pages/login'; */

// routing function
const AppRouting = () => (
    <Router>
        <React.Fragment>
            <HeaderComponent/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/shop" component={ShopComponent} />
                    <Route exact path="/about" component={AboutComponent} />
                    <Route exact path="/contact" component={ContactComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="*" component={NotFoundComponent} />
                </Switch>
            </div>
            <FooterComponent />
        </React.Fragment>
    </Router>
);

export default AppRouting;