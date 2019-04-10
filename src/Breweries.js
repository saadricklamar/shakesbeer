import React, { Component } from 'react';
import Beer from './Beer.js'
import './Breweries.scss';

class Breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      breweryName: this.props.name || '',
      beerList: []
    }

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  getTarget = (e) => {
    this.setState({breweryName: e.target.innerText}, () => {
      this.findBeers(); 
    }) 
    this.toggleDropDown();
  }

  findBeers = () => {
    let match = this.props.dataset.find(brewery => {
      return this.state.breweryName === brewery.name;
    });
    let beers = match && match.beers ? match.beers : null;
    this.setState({beerList: beers});
  }

  toggleDropDown = () => {
    this.setState({dropDown: !this.state.dropDown})
  }

  toggleFavorite = () => {
      !this.props.starredBreweries.includes(this.props.name) 
      ? this.props.updateStarredList(this.state.breweryName, 'add')
      : this.props.updateStarredList(this.state.breweryName)
  }
  
  render() {
    let favClass = this.props.starredBreweries.includes(this.props.name) 
    ? 'far fa-star fas' 
    : 'far fa-star ';

    return (
      <div className='brewery-label'>
        <div className='brewery-header'>
          <i className={favClass} onClick={this.toggleFavorite}></i>
          <h2 onClick={this.getTarget}>{this.props.name}</h2>
        </div>
        {
        this.state.dropDown && this.state.beerList ? (
            this.state.beerList.map(beer => {
                return <Beer beers={this.state.beerList}
                              beerName={beer.name}
                              key={beer.FIELD1}
                        />
            })
        ) : (null)
        }
      </div>
    );
  }
}

export default Breweries;