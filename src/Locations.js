import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      usStates: this.props.dataset.reduce((acc, brewery) => {
        if(!acc.includes(brewery.state)) {
          acc.push(brewery.state)
        }
        return acc;
      }, []).sort()
    }
  }

  toggleDropDown = (e) => {
    this.setState({ dropDown: !this.state.dropDown });
  }

  // getStateOptions = () => {
  //   let statesList = this.props.dataset.reduce((acc, brewery) => {
  //     if(!acc.includes(brewery.state)) {
  //       acc.push(brewery.state)
  //     }
  //     return acc;
  //   }, []).sort();
  //   this.setState({ usStates: statesList });
  // }

  render() {
    let displayClass = '';

    if (this.state.dropDown) {
      displayClass = 'select-expanded';
    }

    return (
      <div className='location-container'>
        <h2 className={`dropdown-header ${displayClass}`} 
            onClick={this.toggleDropDown}>Choose a state</h2>
        {
          this.state.dropDown ? (
          <nav>
            <ul className='state-dropdown'>
              {
                this.state.usStates.map(loc => {
                  return(
                    <li className='state-dropdown-options' 
                        key={loc} 
                        onClick={this.props.chooseState}>{loc}
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          ) : ( null )
        }
      </div>
    );
  }
}


export default Locations;