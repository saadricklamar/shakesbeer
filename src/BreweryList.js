import React, { Component } from 'react';
import Breweries from './Breweries.js'
import './BreweryList.css';



class BreweryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
           
    }
  }

  render() {

      return (
        <div>
        {
          this.props.filteredBreweries.map(brewery => {
            return (
              <Breweries name={brewery.name}
                         dataset={this.props.dataset}
              />
            )
          })
        }
        </div>
        )

    }
}

export default BreweryList;