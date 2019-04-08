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
      filteredBreweries: [],
      breweryCities: [],
      beerStyles: [],
      beerIbus: [],
      citySelection: 'All', 
      styleSelection: 'All',
      ibuSelection: 'All', 
      abvSelection: 'All'
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
      this.refreshBreweryList();
      this.getCities();
      this.getStyles();
      this.getIbus();
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

  getIbus = () => {
    let ibus = this.state.stateBreweries.reduce((acc, brewery) => {
      brewery.beers.forEach(beer => {
        console.log(beer.ibu);
        const ibuMinRange = Math.round(beer.ibu / 10) * 10;
        const ibuOption = `${ibuMinRange}-${ibuMinRange + 9}`;
        if(!acc.includes(ibuOption) && beer.ibu !== null) {
          acc.push(ibuOption);
        }
      })
      return acc;
    }, []).sort().sort((a, b) => a.length - b.length);
    this.setState({ beerIbus: ibus });
  }

  updateFilterSelection = (filterName, value) => {
    const propertyName = `${filterName}Selection`;
    this.setState({ [propertyName]: value });
    this.refreshBreweryList();
  }

  refreshBreweryList = () => {
    //reset page defaults
    this.setState({ filteredBreweries: [...this.state.stateBreweries] }, () => this.runFilters());
  }

  runFilters = property => {
    this.filterByCity();
    this.filterByStyle();
    this.filterByIbu();
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

  filterByStyle = () => {
    if (this.state.styleSelection !== 'All') {
      let filterResults = this.state.filteredBreweries.reduce((acc, brewery) => {
        let breweryStyles = brewery.beers.map(beer => beer.style);
        if(breweryStyles.includes(this.state.styleSelection)) {
          acc.push(brewery);
        }
        return acc;
      }, [])
      this.setState({filteredBreweries: filterResults});
    }
  }

  filterByIbu = () => {
    if (this.state.ibuSelection !== 'All') {
      let filterResults = this.state.filteredBreweries.reduce((acc, brewery) => {
        let breweryIbus = brewery.beers.map(beer => {
          return `${Math.round(beer.ibu / 10) * 10}-${(Math.round(beer.ibu / 10) * 10) + 9}`;
        });
        console.log(breweryIbus);
        if(breweryIbus.includes(this.state.ibuSelection)) {
          acc.push(brewery);
        }
        return acc;
      }, [])
      this.setState({filteredBreweries: filterResults});
    }
  }
 
  render() {
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
                      beerIbus={this.state.beerIbus}
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