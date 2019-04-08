import React, { Component } from 'react';
// import Breweries from './Breweries.js';
import './ResultsPage.css';
import Controls from './Controls.js'
import BreweryList from './BreweryList.js'

class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateBreweries: [],
      breweryCities: [],
      citySelection: 'All', 
      styleSelection: 'All',
      ibuSelection: 'All', 
      abvSelection: 'All',
      filterSelections: [this.citySelection, this.styleSelection, this.ibuSelection, this.abvSelection],
      filteredBreweries: [],
      filterOptions: {cities: [], styles: [], ibus: [], abvs: []}
    }
  }

  componentWillMount() {
    this.getStateBreweries();
  }

  getStateBreweries = () => {
    let stateBreweries = this.props.dataset.filter(brewery => {
      return brewery.state === this.props.selectedState;
    })
    this.setState({ stateBreweries: stateBreweries }, () => {
      this.displayMatchingBreweries();
      this.getCities();
    })
  }

  getCities = () => {
    let cities = this.state.stateBreweries.reduce((acc, brewery) => {
      if(!acc.includes(brewery.city)) {
        acc.push(brewery.city)
      }
      return acc;
    }, []).sort();
    this.setState({ breweryCities: cities });
  } 

  updateFilterSelection = (filterName, value) => {
    const propertyName = `${filterName}Selection`;
    this.setState({ [propertyName]: value });
    this.displayMatchingBreweries();
  }

  filterbyCity = selected => {
    let breweries = this.state.stateBreweries.filter(brewery => {
      if (selected === 'All') {
        return brewery;
      } else {
        return brewery.city === selected;
      }
    })
    this.setState({ filteredBreweries: breweries });
  }

  displayMatchingBreweries = () => {
    this.setState({ filteredBreweries: [...this.state.stateBreweries] }, () => this.checkFilterMatches('city'));
  }

  checkFilterMatches = property => {
    let filterResults = [];
    if (this.state[`${property}Selection`] !== 'All') {
      filterResults = this.state.filteredBreweries.filter(result => {
          return result[property] === this.state[`${property}Selection`];
        });
      this.setState({filteredBreweries: filterResults});
    }
  }
 
  render() {
    console.log(this.state.filteredBreweries);  //not working
    console.log(this.state.citySelection); //this is working
    return (
      <div className="results-page">
        <header>
          <img src="./images/shakesbeerlogosmall.png" alt="shakesbeer logo"/>
          <h1 className="results-header">ShakesBeer</h1>
        </header>
        <main>
          <h2 className="state-subheading">{this.props.selectedState}</h2>  
          <div className="brew-cards">
            <Controls breweryCities={this.state.breweryCities} 
                      filterByCity={this.filterByCity}
                      filterSelections={this.state.filterSelections}
                      updateFilterSelection={this.updateFilterSelection}
            />
            <BreweryList filteredBreweries={this.state.filteredBreweries} 
                         dataset={this.props.dataset}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default ResultsPage;