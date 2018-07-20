import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Stepper from './stepper';
import './index.css';
export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.setState(prevState => ({
            active: prevState.active + 1
        }));
    }
    prev() {
        this.setState(prevState => ({
            active: prevState.active - 1
        }));
    }
    
    change = (active) => {
        this.setState({active});
    };

    makeStepper(images, active, maxSteps, next, prev) {
        if (images && images.length > 1) {
            return <Stepper active={active} maxSteps={maxSteps} next={this.next} prev={this.prev} />
        }        
    }

    render() {
        const { images } = this.props;
        const { active } = this.state;
        const maxSteps = images.length;

        return (
            <div className="carousel-wrapper">
                <SwipeableViews
                axis="x"
                index={active}
                onChangeIndex={this.change}
                enableMouseEvents>
                    {images.map((image, index) => (
                        <img key={index} className='item' src={image.src} alt={image.alt || ''} />
                    ))}
                </SwipeableViews>                  
                {this.makeStepper(images, active, maxSteps, this.next, this.prev)}
            </div>
        );
    }
}