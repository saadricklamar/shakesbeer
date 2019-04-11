import React, { Component } from 'react';
import Beer from './Beer.js'
import './Breweries.scss';

class Breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweryName: this.props.name || '',
      beerList: []
    }

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  componentWillMount() {
    this.getBeers();
  }

  toggleBeerList = (e) => {
    const beerList = e.target.closest('.brewery-label').querySelector('.beer-dropdown');
    beerList.classList.toggle('hidden');
  }

  getBeers = () => {
    let match = this.props.dataset.find(brewery => {
      return this.state.breweryName === brewery.name;
    });
    let beers = match && match.beers ? match.beers : null;
    this.setState({beerList: beers});
  }

  toggleDropDown = (e) => {
    this.setState({dropDown: !this.state.dropDown});
  }

  toggleFavorite = () => {
      !this.props.starredBreweries.includes(this.props.name) 
      ? this.props.updateStarredList(this.state.breweryName, 'add')
      : this.props.updateStarredList(this.state.breweryName)
  }
  
  render() {
    let favClass = this.props.starredBreweries.includes(this.props.name) 
    ? 'far fa-star fas' 
    : 'far fa-star';

    return (
      <div className='brewery-label'>
        <div className='brewery-header'>
          <i className={favClass} onClick={this.toggleFavorite}></i>
          <h2 onClick={this.toggleBeerList}>{this.props.name}</h2>
        </div>
        <div className='beer-dropdown hidden'>
        {
        this.state.beerList ? (
          this.state.beerList.map(beer => {
            return <Beer beers={this.state.beerList}
                         beerName={beer.name}
                         key={beer.name}
                    />
          })
        ) : (null)
        }
        </div>
      </div>
    );
  }
}

export default Breweries;