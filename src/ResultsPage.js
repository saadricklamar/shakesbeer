import React, { Component } from 'react';
import Breweries from './Breweries.js';
import './ResultsPage.css';
import Controls from './Controls.js'
import BreweryList from './BreweryList.js'

class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBreweries: [],
      breweryCities: [],
      filteredBreweries: []
    }
  }

  componentDidMount() {
    this.filterBreweries();
  }

  filterBreweries = () => {
    let locationBreweries = this.props.breweries.filter( brew => {
      return brew.state === this.props.selectedState;
    })
    this.setState({currentBreweries: locationBreweries}, () => {
      this.getCities();
    })
  }

  getCities = () => {
    let cities = this.state.currentBreweries.reduce((acc, currentBrewery) => {
      if(!acc.includes(currentBrewery.city)) {
        acc.push(currentBrewery.city)
      }
      return acc;
    }, []).sort();
    this.setState({breweryCities: cities});
  } 

  filterCities = (selected) => {
    let breweries = this.state.currentBreweries.filter(brewery => {
      if(selected === 'All') {
        return brewery;
      } else {
        return brewery.city === selected
      }
    })
    this.setState({filteredBreweries: breweries})
  }
 
  render() {

    return (
      <div className="results-page">
        <h1 className="results-header">ShakesBeer</h1>
        <h2 className="state-subheading">{this.props.selectedState}</h2> 
        <Controls breweryCities={this.state.breweryCities} filterCities={this.filterCities}/>
        <BreweryList filteredBreweries={this.state.filteredBreweries} beers={this.props.beers}/>
      </div>
    );
  }
}

export default ResultsPage;