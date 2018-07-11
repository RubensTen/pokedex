import React, { Component } from 'react';
import './index.css';
// material ui components
import Icon from '@material-ui/core/Icon';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title">
                    Single <span className="orange">Ecommerce</span>
                </h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="header-icons">
                    <a href="/login">
                        <Icon className="icon" color="disabled">account_circle</Icon>
                    </a>
                    <a href="/cart">
                        <Icon className="icon" color="disabled">shopping_cart</Icon>
                    </a>
                </div>
            </header>
        );
    }
}