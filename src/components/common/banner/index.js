import React from 'react';
import './index.css';
export class Banner extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="banner-container">
                <img src={this.props.image.src} alt={this.props.image.alt}/>
            </div>
        );
    }
}