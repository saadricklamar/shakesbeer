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
        <header>
          <div className="logo"/>
          <h1 className="results-header">ShakesBeer</h1>
        </header>
        <main>
          <h2 className="state-subheading">{this.props.selectedState}</h2>  
          <div className="brew-cards">
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
        </main>
      </div>
    );
  }
}

export default Results;