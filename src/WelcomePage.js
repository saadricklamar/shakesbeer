import React, { Component } from 'react';
import Locations from './Locations.js';
import './WelcomePage.css';
// import Breweries from './Breweries.js';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBreweries: []
    }
  }

  render() {
    return (
      <div className='welcome-page'>
        <h1 className='welcome-header'>ShakesBeer</h1>
        <Locations dataset={this.props.dataset}
                   breweries={this.props.breweries}
                   chooseState={this.props.chooseState}  
        />
      </div>
    );
  }
}

export default WelcomePage;