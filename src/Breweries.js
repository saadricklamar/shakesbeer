import React, { Component } from 'react';
import Beer from "./Beer.js"
import './Breweries.css';


class Breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      breweryName: this.props.name || '',
      beerList: [],
      favorite: this.props.starredBreweries.includes(this.breweryName)
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
      let newBeers = this.props.dataset.find(brewery => {
        return this.state.breweryName === brewery.name;
      }).beers
      this.setState({beerList: newBeers});
    }

    toggleDropDown = () => {
      this.setState({dropDown: !this.state.dropDown})
    }

    toggleFavorite = () => {
      this.setState({favorite: !this.state.favorite}, () => {
        this.state.favorite ? this.props.addStarredBrewery(this.state.breweryName)
        : this.props.removeStarredBrewery(this.state.breweryName)
      });
    }
    
    render() {
      let favClass = this.state.favorite ? 'fas far fa-star' : 'far fa-star'
      return (
        <div className='brewery-label'>
          <div className='brewery-header'>
            <i className={favClass} onClick={this.toggleFavorite}></i>
            <h2 onClick={this.getTarget}>{this.props.name}</h2>
          </div>
          {
          this.state.dropDown ? (
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