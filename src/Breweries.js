import React, { Component } from 'react';
import Beer from "./Beer.js"
import './Breweries.css';


class Breweries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      breweryName: '',
      beerList: [],
      favorite: false
    }
  }

    getTarget = (e) => {
      this.setState({breweryName: e.target.innerText}, () => {
        this.findBeers(); 
      }) 
      this.toggleDropDown()
    }

    findBeers = () => {
      let newBeers = this.props.dataset.find(brewery => {
        return this.state.breweryName === brewery.name;
      }).beers
      this.setState({beerList: newBeers});
    }

    toggleDropDown = () => {
      this.setState({dropDown: !this.state.dropDown})
    }

    toggleFavorite = (e) => {
      this.setState({favorite: !this.state.favorite});
      e.target.classList.toggle('fas');
    }
    
    render() {

      return (
        <div>
          <div className='brewery-header brewery-label'>
            <i className='far fa-star' onClick={this.toggleFavorite}></i>
            <h2 onClick={this.getTarget}>{this.props.name}</h2>
          </div>
          {
          this.state.dropDown ? (
              this.state.beerList.map(beer => {
                  return <Beer beers={this.state.beerList}
                               beerName={beer.name}
                               key={beer.FIELD1}
                          />
              })
          ) : (null)
          }
        </div>
      );
    }
}

export default Breweries;