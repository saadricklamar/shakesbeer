import React, { Component } from 'react';
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

  render() {
    return (
      <form className="nav">
        <label htmlFor='city-filter' className='filter-label'>City: </label>
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
      </form>
    )
  }
}

  export default Controls;