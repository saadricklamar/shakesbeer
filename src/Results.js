import React, { Component } from 'react';
import Breweries from './Breweries.js';
import './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBreweries: []
    }
  }

  componentDidMount() {
    this.filterBreweries();
  }

  filterBreweries = () => {
    let locationBreweries = this.props.breweries.filter( brew => {
      return brew.state === this.props.selectedState;
    })
    console.log(locationBreweries);
    this.setState({currentBreweries: locationBreweries})
  }
 
  render() {
    return (
      <div className="results-page">
        <h1 className="results-header">ShakesBeer</h1>
        <h2 className="state-subheading">{this.props.selectedState}</h2>  
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

export default Results;