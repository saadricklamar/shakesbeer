import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {

  render() {
    return (
      <div>
        <label htmlFor={this.props.filterName} className='filter-label'>{this.props.label}</label>
        <select className='filter' id={this.props.filterName} onChange={this.props.updateSelected}>
        <option>All</option>
          {
            this.props.filterOptions.map(loc => {
              return(
                <option className='state-dropdown-options' key={loc}>{loc}</option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default Filter;