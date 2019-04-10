import React, { Component } from 'react';
import Filter from './Filter.js';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

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
        <Filter 
          className="city-filter"
          filterName="city-filter"
          label="City: "
          filterOptions={this.props.breweryCities}
          updateSelected={this.updateCity}
        />
        <Filter
          className="style-filter" 
          filterName="style-filter" 
          label="Style: " 
          filterOptions={this.props.beerStyles} 
          updateSelected={this.updateStyle}
        />
        <Filter 
          className="ibu-filter" 
          filterName="ibu-filter" 
          label="Ibu: " 
          filterOptions={this.props.beerIbus} 
          updateSelected={this.updateIbu}
        />
        {/* Add Filter for abv */}

        {/* <label htmlFor='city-filter' className='filter-label'>City: </label>
        <select className='filter' id='city-filter' onChange={this.updateCity}>
        <option>All</option>
          {
            this.props.breweryCities.map(loc => {
              return(
                <option className='state-dropdown-options' key={loc}>{loc}</option>
              )
            })
          }
        </select>
        <label htmlFor='style-filter' className='filter-label'>Style: </label>
        <select className='filter' id='style-filter' onChange={this.updateStyle}>
        <option>All</option>
          {
            this.props.beerStyles.map(loc => {
              return(
                <option className='state-dropdown-options' key={loc}>{loc}</option>
              )
            })
          }
        </select>
        <label htmlFor='ibu-filter' className='filter-label'>ibu: </label>
        <select className='filter' id='ibu-filter' onChange={this.updateIbu}>
        <option>All</option>
          {
            this.props.beerIbus.map(loc => {
              return(
                <option className='state-dropdown-options' key={loc}>{loc}</option>
              )
            })
          }
        </select> */}
      </form>
    )
  }
}

  export default Controls;