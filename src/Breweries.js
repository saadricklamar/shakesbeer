import React, { Component } from 'react';
import Beer from './Beer.js';

class Breweries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            currentBrewery: 0,
            breweryName: '',
            beerList: []
        }
        
    }

    getTarget = (e) => {
        this.setState({breweryName: e.target.innerText}, () => {
            this.findBrewery(); 
        }) 
        this.toggleDropDown()
    }

    findBrewery = () => {
        let newBrewery = this.props.brew.find(brewery => {
            return this.state.breweryName === brewery.name;
        }).FIELD1
        this.setState({currentBrewery: newBrewery}, () => {
            this.filterBeers()
        })
    }

    filterBeers = () => {
        let specificBreweryBeers = this.props.beer.filter(currentBeer => {
            return currentBeer.brewery_id === this.state.currentBrewery;
        })
        this.setState({beerList: specificBreweryBeers})
    }

    toggleDropDown = () => {
        this.setState({dropDown: !this.state.dropDown})
    }
    
    render() {
        return (
            <div>
               <h2 onClick={this.getTarget}>{this.props.brewery}</h2>
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