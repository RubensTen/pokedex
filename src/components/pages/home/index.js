import React from 'react';
import './index.css';

const Home = () => (
    <section id="home-wrapper" className="container">        
        <section>
            this contain a banner of e-commerce
        </section>
        <section>
            this contain a recen products
        </section>
        <section>
            this contain the brands of products
        </section>
        <footer>
            this is a footer page
        </footer>
    </section>
);
// dude when use export default this fail in the use app routing why?
export { Home };