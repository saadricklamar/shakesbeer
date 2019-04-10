import React, { Component } from 'react';
import './ResultsPage.css';
import Controls from './Controls.js'
import BreweryList from './BreweryList.js'
import logo from './images/shakesbeerlogosmall.png';

let starredData = JSON.parse(localStorage.getItem('userStarredBreweries')) || [];

class ResultsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateBreweries: [],
      filteredBreweries: [],
      starredBreweries: starredData,
      breweryCities: [],
      beerStyles: [],
      beerIbus: [],
      citySelection: 'All', 
      styleSelection: 'All',
      ibuSelection: 'All',
      viewingStarred: false
    }

    this.addStarredBrewery = this.addStarredBrewery.bind(this);
    this.removeStarredBrewery = this.removeStarredBrewery.bind(this);
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

  toggleStarView = () => {
    this.setState({ viewingStarred: !this.state.viewingStarred }, () => {
      this.refreshBreweryList();
    });
  }

  refreshBreweryList = () => {
    //reset page defaults, or whatever we need to do to get beer details to show and collapse on filter change
    this.setState({ filteredBreweries: [...this.state.stateBreweries] }, () => this.filterByCity());
  }

  filterByCity = () => {
    if (this.state.citySelection !== 'All') {
      let filterResults = this.state.filteredBreweries.filter(brewery => {
        return brewery.city === this.state.citySelection;
      });
      this.setState({ filteredBreweries: filterResults }, () => this.filterByStyle());
    } else {
      this.filterByStyle();
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
      this.setState({filteredBreweries: filterResults}, () => this.filterByIbu());
    } else {
      this.filterByIbu();
    }
  }

  filterByIbu = () => {
    if (this.state.ibuSelection !== 'All') {
      let filterResults = this.state.filteredBreweries.reduce((acc, brewery) => {
        let breweryIbus = brewery.beers.map(beer => {
          return `${Math.round(beer.ibu / 10) * 10}-${(Math.round(beer.ibu / 10) * 10) + 9}`;
        });
        if(breweryIbus.includes(this.state.ibuSelection)) {
          acc.push(brewery);
        }
        return acc;
      }, [])
      this.setState({ filteredBreweries: filterResults }, () => this.filterByStarred()); 
    } 
  }

  addStarredBrewery = name => {
    const list = [...this.state.starredBreweries];
    list.push(name);
    this.setState({ starredBreweries: list }, () => {
      localStorage.setItem('userStarredBreweries', JSON.stringify(this.state.starredBreweries))
    });
  }

  removeStarredBrewery = name => {
    const list = [...this.state.starredBreweries];
    const breweryIndex = this.state.starredBreweries.indexOf(this.state.starredBreweries
      .find(brewery => brewery.name === name));
    list.splice(breweryIndex, 1);
    this.setState({ starredBreweries: list}, () => {
      localStorage.setItem('userStarredBreweries', JSON.stringify(this.state.starredBreweries));
    })
  }

  filterByStarred = () => {
    if (this.state.viewingStarred) {
      let filterResults = this.state.filteredBreweries.filter(brewery => {
        return this.state.starredBreweries.includes(brewery.name);
      })
      this.setState({ filteredBreweries: filterResults })
    }
  }
 
  render() {
    return (
      <div className="results-page">
        <header>
          <img className='logo' src={logo} alt="shakesbeer logo"/>
          <h1 className="results-header">ShakesBeer</h1>
        </header>
        <main>
          <h2 className="state-subheading">{this.props.selectedState}</h2>  
          <div className="brew-cards">
            <Controls breweryCities={this.state.breweryCities} 
                      beerStyles={this.state.beerStyles}
                      beerIbus={this.state.beerIbus}
                      updateFilterSelection={this.updateFilterSelection}
                      toggleStarView={this.toggleStarView}
            />
            <BreweryList filteredBreweries={this.state.filteredBreweries} 
                         dataset={this.props.dataset}
                         addStarredBrewery={this.addStarredBrewery}
                         removeStarredBrewery={this.removeStarredBrewery}
                         starredBreweries={this.state.starredBreweries}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default ResultsPage;