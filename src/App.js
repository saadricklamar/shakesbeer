import React, { Component } from 'react';
import './App.css';
import { breweries, beers } from './data.js';
import Locations from './Locations.js';
import Breweries from './Breweries.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: beers,
      breweries: breweries,
      locations: [],
      currentLocation: '',
      currentBreweries: []
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

  chooseState = (e) => {
    console.log(e)
    this.setState({currentLocation: e}, ()=> {
      this.filteredBreweries()
    })
  }
  
  filteredBreweries = () => {
    let locationBreweries = this.state.breweries.filter( brew => {
      return brew.state === this.state.currentLocation
    })
    this.setState({currentBreweries: locationBreweries})
  }
  
  render() {
    console.log(this.state.currentLocation)
    console.log(this.state.currentBreweries)
    return (
      <div>
        <h1>ShakesBeer</h1>
        <Locations location={this.state.locations}
                   filter={this.chooseState}    
        />
        {
          this.state.currentBreweries.map( brew => {
            return (
              <Breweries brewery={brew.name}
                         key={brew.FIELD1} 
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
