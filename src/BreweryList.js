import React, { Component } from 'react';
import Breweries from './Breweries.js'


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
          this.props.filteredBreweries.map( brew => {
            return (
              <Breweries brewery={brew.name}
                         key={brew.FIELD1} 
                         beer={this.props.beers}
                         brew={this.props.currentBreweries}
              />
            )
          })
        }
        </div>
        )

    }
}

export default BreweryList;