import React, { Component } from 'react';

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
      <div>
        <h2 onClick={this.toggleDropDown}>location</h2>
        {
          this.state.dropDown ? (
            <ul>
              {
                this.props.location.map(loc =>{
                  return(
                    <li key={loc} onClick={this.getTarget}>{loc}</li>
                  )
                })
              }
            </ul>
          ) : ( null )
        }
      </div>
    );
  }
}


export default Locations;