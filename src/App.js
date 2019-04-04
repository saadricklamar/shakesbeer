import React, { Component } from 'react';
import './App.css';
import { breweries, beers } from './data.js';
import Welcome from './Welcome.js';
import Breweries from './Breweries.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: beers,
      breweries: breweries,
      locations: []
    }
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
    }, []).sort();
    this.setState({locations: states});
  }
  
  render() {
    console.log(this.state.currentLocation)
    console.log(this.state.currentBreweries)
    return (
      <Welcome locations={this.state.locations} breweries={this.state.breweries} beers={this.state.beers}/>
    );
  }
}

export default App;
