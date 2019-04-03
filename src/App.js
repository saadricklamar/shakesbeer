import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { breweries, beers } from './data.js';
import Locations from './Locations.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: beers,
      breweries: breweries,
      locations: []
    }

    this.getStates=this.getStates.bind(this)

  }

  componentDidMount() {
    this.getStates()
  }

  getStates = () => {
    let states = this.state.breweries.reduce((acc, currentBrewery) => {
        if(!acc.includes(currentBrewery.state)) {
          acc.push(currentBrewery.state)
        }
      return acc;
    }, [])
    this.setState({locations: states});
  }


  render() {
    console.log(this.state.locations)
    return (
      <div>
        <Locations location={this.state.locations}/>
        {/*<button type="button" onClick={this.assignStates}></button>*/}
      </div>
    );
  }
}

export default App;
