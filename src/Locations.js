import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    }
  }

  toggleDropDown = (e) => {
    this.setState({dropDown: !this.state.dropDown});
  }

render() {
  let displayClass = '';

  if (this.state.dropDown) {
    displayClass = 'select-expanded';
  }
  return (
    <div className='location-container'>
      <h2 className={`dropdown-header ${displayClass}`} onClick={this.toggleDropDown}>Choose a state</h2>
      {
        this.state.dropDown ? (
        <nav>
          <ul className='state-dropdown'>
            {
              this.props.location.map(loc => {
                return(
                  <li className='state-dropdown-options' key={loc} onClick={this.props.chooseState}>{loc}</li>
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