import React, { Component } from 'react';

class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }



   render() {
        return (
            <div>
               <ul>
                  <li>{this.props.beerName}</li>
               </ul>
            </div>
        );
    }
}


export default Beer;