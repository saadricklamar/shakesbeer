import React, { Component } from 'react';

class Breweries extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
               <h2>{this.props.brewery}</h2>
            </div>
        );
    }
}

export default Breweries;