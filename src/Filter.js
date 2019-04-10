import React from 'react';
import './Filter.css';

function Filter(props) {
  return (
    <div className="filter-container">
      <label htmlFor={props.filterName} className='filter-label'>{props.label}</label>
      <select className='filter' id={props.filterName} onChange={props.updateSelected}>
      <option>All</option>
        {
          props.filterOptions.map(loc => {
            return(
              <option className='state-dropdown-options' key={loc}>{loc}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Filter;