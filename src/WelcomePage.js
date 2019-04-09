import React, { Component } from 'react';
import Locations from './Locations.js';
import './WelcomePage.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className='welcome-page'>
        <h1 className='welcome-header'>ShakesBeer</h1>
        <Locations dataset={this.props.dataset} chooseState={this.props.chooseState} />
      </div>
    );
  }
}

export default WelcomePage;