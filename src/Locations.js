import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
       splashPage: true
    }

  }



  appendState = () => {
     this.props.location.forEach(state => {
     let stateInput = document.querySelector('#state-input');
     let option = document.createElement('option')
     option.text = state;
     stateInput.add(option)
     // stateInput.appendChild(`<option>${state}</option>`)
    })

  }


render() {
    return (
      <div>
        <form>
          {this.appendState()}
          <select id="state-input"></select>
        </form>
      </div>
    );
  }
}


export default Locations;