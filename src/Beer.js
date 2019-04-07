import React, { Component } from 'react';
import BeerDescription from './BeerDescription.js';

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBeer: {},
            isDisplayed: false,
            chosenBeerName: ''     
        }        
    }
    
    getTarget = (e) => {
        this.setState({chosenBeerName: e.target.innerText}, ()=> {
            this.findBeer();
        });
        this.toggleDiscription();
    }

    findBeer = () =>{
        let newSelected = this.props.beers.find( beer => {
            return beer.name === this.state.chosenBeerName
        });
        this.setState({selectedBeer: newSelected});
    }

    toggleDiscription = () =>{
        this.setState({isDisplayed: !this.state.isDisplayed});
    }

    render() {
        return (
            <div>
               <ul>
                  <li onClick={this.getTarget}>{this.props.beerName}</li>
               </ul>
               {
                   this.state.isDisplayed ? (
                    <BeerDescription selectedBeer={this.state.selectedBeer}
                                     toggle={this.toggleDiscription}
                    /> 
                   ) : (null)
               }
            </div>
        );
    }
}


export default Beer;