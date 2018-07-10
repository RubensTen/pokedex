import React, { Component } from 'react';
import './index.css';
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
            </header>
        );
    }
}