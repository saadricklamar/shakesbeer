import React, { Component } from 'react';
import './BeerDescription.css'

class BeerDescription extends Component {
    render() {
        return (
            <div className='beer-description'>
                <h3>{this.props.selectedBeer.name}</h3>
                <div className='beer-stuff'>
                    <p>Style: {this.props.selectedBeer.style}</p>
                    <p>IBU: {this.props.selectedBeer.ibu}</p>
                    <p>ABV: {this.props.selectedBeer.abv}</p>
                </div>
                <p className='click-me'
                   role='button'
                   onClick={this.props.toggle}>Click ME!</p>
            </div>
        );
    }
}

export default BeerDescription;