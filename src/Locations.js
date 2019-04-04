import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    }
  }

  getTarget = (e) => {
    this.props.filter(e.target.innerText)
    this.toggleDropDown()
  }

  toggleDropDown = () => {
    this.setState({dropDown: !this.state.dropDown})
    console.log(this.state.dropDown)
  }

render() {
    return (
      <div className='location-container'>
        <h2 onMouseOver={this.toggleDropDown}>Choose a state</h2>
        {
          this.state.dropDown ? (
          <nav>
            <ul>
              {
                this.props.location.map(loc =>{
                  return(
                    <li className='location-option' key={loc} onClick={this.getTarget}>{loc}</li>
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