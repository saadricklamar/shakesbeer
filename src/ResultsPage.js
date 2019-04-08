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
      beerStyles: [],
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
      this.getStyles();
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

  getStyles = () => {
    let styles = this.state.stateBreweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        if(!acc.includes(beer.style) && beer.style !== '') {
          
          acc.push(beer.style)
        }
      })
      return acc;
    }, []).sort();

    this.setState({ beerStyles: styles });
  } 

  updateFilterSelection = (filterName, value) => {
    const propertyName = `${filterName}Selection`;
    this.setState({ [propertyName]: value });
    this.displayMatchingBreweries();
  }

  // filterbyCity = selected => {
  //   let breweries = this.state.stateBreweries.filter(brewery => {
  //     if (selected === 'All') {
  //       return brewery;
  //     } else {
  //       return brewery.city === selected;
  //     }
  //   })
  //   this.setState({ filteredBreweries: breweries });
  // }

  displayMatchingBreweries = () => {
    //reset page defaults
    this.setState({ filteredBreweries: [...this.state.stateBreweries] }, () => this.runFilters());
  }

  runFilters = property => {
    this.filterByCity();
    this.filterByBeerProperty('style');
    // this.filterByBeerProperty('ibu');
    // this.filterByBeerProperty('abv');
  } 

  filterByCity = () => {
    if (this.state.citySelection !== 'All') {
      let filterResults = this.state.filteredBreweries.filter(brewery => {
        return brewery.city === this.state.citySelection;
      });
      this.setState({ filteredBreweries: filterResults });
    }
  }

  filterByBeerProperty = property => {
    if (this.state[`${property}Selection`] !== 'All') {
      let filterResults = this.state.filteredBreweries.reduce((acc, brewery) => {
        let breweryProperty = brewery.beers.map(beer => beer[property])
        if(breweryProperty.includes(this.state[`${property}Selection`])) {
          acc.push(brewery);
        }
        return acc;
      }, [])
      this.setState({filteredBreweries: filterResults});

    }
  }

 
  render() {
    console.log(this.state.beerStyles);
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
                      beerStyles={this.state.beerStyles}
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