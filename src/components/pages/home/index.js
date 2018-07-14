import React from 'react';
import './index.css';

import { Banner as BannerComponent } from '../../common/banner';
import { ProductCard as ProductCardComponent } from '../../common/product/card';

const recentProducts = [
    {
        id: 1,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    },
    {
        id: 2,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    },
    {
        id: 3,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    },
    {
        id: 4,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    },
    {
        id: 5,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    },
    {
        id: 6,
        title: 'Foo product',
        description: 'Foo description',
        price: 1000,
        images: [
            'https://images-na.ssl-images-amazon.com/images/I/61rPHfR6c5L._SX679_.jpg'
        ]
    }
];
const makeRecentProducts = (recentProducts) => {    
    return recentProducts.map((product) =>
        <div className="product-item">
            <ProductCardComponent product={product} key={product.id} />
        </div>
    );
};

const Home = () => (
    <section id="home-wrapper">
        <section id="banner">
            <BannerComponent image={{src: 'assets/img/banner.jpg', alt: 'Landing home'}} />
        </section>
        <hr/>
        <section className="recent-products">
            <h2>Productos recientes</h2>
            <div className="wrapper-recent-products">
                {makeRecentProducts(recentProducts)}
            </div>  
        </section>
        <hr/>
        <section className="brands">
            <h2>Nuestras Marcas</h2>

        </section>
    </section>
);
// dude when use export default this fail in the use app routing why?
export { Home };