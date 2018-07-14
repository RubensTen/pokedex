import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './index.css';

export class ProductCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="product-card">
                <Card className='card'>
                    <CardMedia
                        className='media'
                        image={this.props.product.images[0]}
                        title={this.props.product.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.product.title}
                        </Typography>
                        <Typography component="p">
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