import React, { Component } from 'react';
// common components
import { Banner as BannerComponent } from '../../common/banner';
import { ProductCard as ProductCardComponent } from '../../common/product/card';
// providers
import { ProductProvider } from '../../../providers/product';
//css
import './index.css';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={
            recentProducts: [],
            loading: true
        };
        this.productProvider = new ProductProvider();
    }

    componentDidMount() {
        this.loadRecenProducts();
    }

    /**
     * Call api to get recent products and set value in the state of component
     */
    loadRecenProducts() {
        this.productProvider.getRecentProducts().then(recentProducts => {
            this.setState({ recentProducts, loading: false });
        });  
    }

    /**
     * Make elements(html components) to render recent products
     */
    makeRecentProducts = () => {
        const { recentProducts, loading } = this.state;
        if (loading) {
            return <h4>Loading products ...</h4>
        }else {
            return recentProducts.map((product) => {
                return <div className="product-item" key={product.id}>
                    <ProductCardComponent product={product}/>
                </div>
            });
        }
    };
        

    render() {        
        return (
            <section id="home-wrapper">
                <section id="banner">
                    <BannerComponent image={{ src: 'assets/img/banner.jpg', alt: 'Landing home' }} />
                </section>
                <hr />
                <section className="recent-products">
                    <h2>Productos recientes</h2>
                    <div className="wrapper-recent-products">
                        {this.makeRecentProducts()}
                    </div>
                </section>
                <hr />
                <section className="brands">
                    <h2>Nuestras Marcas</h2>
                    <div className="brand-wrapper">
                        <img src="assets/img/brands/brand1.png" alt="" />
                        <img src="assets/img/brands/brand2.png" alt="" />
                        <img src="assets/img/brands/brand3.png" alt="" />
                        <img src="assets/img/brands/brand4.png" alt="" />
                        <img src="assets/img/brands/brand5.png" alt=""/>
                    </div>
                </section>
                <hr/>
                <section id="banner">
                    <BannerComponent image={{ src: 'assets/img/banner-footer.jpg', alt: 'Banner in footer' }} />
                </section>
            </section>
        );
    }
}