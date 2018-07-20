import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from '../../carousel';
import './index.css';

const makeImageCarousel = (images) => {
    if(images && images.length > 0) {
        return <Carousel images={images} />
    }
    return <div className="no-image">No images to this product</div>
};

export class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <Card className='card'>
                    {makeImageCarousel(this.props.product.images)}
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2" className="title">
                            {this.props.product.title}
                        </Typography>
                        <Typography component="p" className="description">
                            {this.props.product.description}                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}