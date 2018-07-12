import React from 'react';
import './index.css';

const Login = () => (
    <section id="wrapper-login">
        <h2 id="title">Welcome to the Single React App</h2>
        <form className="form">
            <div className="form-group">
                <label htmlFor="user">User</label>
                <input type="text" name="user" id="user"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div className="form-group">
                <button id="login" name="login">Login</button>
            </div>
        </form>
    </section>
);
// dude when use export default this fail in the use app routing why?
export {Login};