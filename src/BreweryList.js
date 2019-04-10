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
                         starredBreweries={this.props.starredBreweries}
                         addStarredBrewery={this.props.addStarredBrewery}
                         removeStarredBrewery={this.props.removeStarredBrewery}
              />
            )
          })
        }
        </div>
        )

    }
}

export default BreweryList;