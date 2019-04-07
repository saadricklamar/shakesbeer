import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: ''
      
    }
  }

  chooseCity = (e) => {
    this.setState({selectedCity: e.target.value}, () => {
      this.props.filterCities(this.state.selectedCity);
    });
  }

  render() {
  
    return (
      <form className="nav">
        <label for='city-filter' className='filter-label'>City: </label>
        <select className='filter' id='city-filter' onChange={this.chooseCity} defaultValue={'All'}>
        <option>All</option>
          {
            this.props.breweryCities.map(loc => {
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