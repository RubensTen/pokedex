import React, { Component } from 'react';
import './index.css';
// material ui components
import Icon from '@material-ui/core/Icon';
import Link from 'react-router-dom/Link';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title">
                    Single <span className="orange">Ecommerce</span>
                </h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="header-icons">
                    <Link to="/login">                
                        <Icon className="icon" color="disabled">account_circle</Icon>
                    </Link>
                    <Link to="/cart">
                        <Icon className="icon" color="disabled">shopping_cart</Icon>
                    </Link>
                </div>
            </header>
        );
    }
}