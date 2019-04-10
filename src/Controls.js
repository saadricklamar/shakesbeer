import React, { Component } from 'react';
import Filter from './Filter.js';
import './Controls.css';

class Controls extends Component {

  updateCity = (e) => {
    this.props.updateFilterSelection('city', e.target.value); 
  }

  updateStyle = (e) => {
    this.props.updateFilterSelection('style', e.target.value); 
  }

  updateIbu = (e) => {
    this.props.updateFilterSelection('ibu', e.target.value); 
  }

  render() {
    return (
      <form className="filter-area">
        <Filter filterName="city-filter" 
                label="City: " 
                filterOptions={this.props.breweryCities} 
                updateSelected={this.updateCity} 
        />
        <Filter filterName="style-filter" 
                label="Style: " 
                filterOptions={this.props.beerStyles} 
                updateSelected={this.updateStyle} 
        />
        <Filter filterName="ibu-filter" 
                label="Ibu: " 
                filterOptions={this.props.beerIbus} 
                updateSelected={this.updateIbu} 
        />
        <label htmlFor='fav-filter'>Star Filter: </label>
        <input type='checkbox' id='fav-filter' onClick={this.toggleStarView} />
      </form>
    )
  }
}

  export default Controls;