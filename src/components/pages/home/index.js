import React from 'react';
import './index.css';

import { Banner as BannerComponent } from '../../common/banner';
const Home = () => (
    <section id="home-wrapper">
        <section id="banner">
            <BannerComponent image={{src: 'assets/img/banner.jpg', alt: 'Landing home'}} />
        </section>
        <hr/>
        <section>
            this contain a recen products
        </section>
        <section>
            this contain the brands of products
        </section>
    </section>
);
// dude when use export default this fail in the use app routing why?
export { Home };