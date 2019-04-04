import React, { Component } from 'react';
import Locations from './Locations.js';
import './Welcome.css';
import Breweries from './Breweries.js';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: '',
      currentBreweries: []
    }
  }


  chooseState = (e) => {
    console.log(e)
    this.setState({currentLocation: e}, ()=> {
      this.filteredBreweries()
    })
  }
  
  filteredBreweries = () => {
    let locationBreweries = this.props.breweries.filter( brew => {
      return brew.state === this.state.currentLocation
    })
    this.setState({currentBreweries: locationBreweries})
  }

  render() {
    return (
      <div>
        <h1>ShakesBeer</h1>
        <Locations location={this.props.locations}
                   filter={this.chooseState}    
        />
        {
          this.state.currentBreweries.map( brew => {
            return (
              <Breweries brewery={brew.name}
                         key={brew.FIELD1} 
                         beer={this.props.beers}
                         brew={this.state.currentBreweries}
              />
            )
          })
        }
      </div>
    );
  }
}

export default Welcome;