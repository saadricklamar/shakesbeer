import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
    }
  }

  updateCity = (e) => {
    this.props.updateFilterSelection('city', e.target.value); //will only need this if we go with parent props & filter

    // this.setState({selectedCity: e.target.value}, () => {
    //   this.props.filterByCity(this.state.selectedCity);
    // });
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
      </form>
    )
  }
}

  export default Controls;