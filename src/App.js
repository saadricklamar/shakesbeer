import React, { Component } from 'react';
import './App.css';
import { breweries, beers } from './data.js';
import WelcomePage from './WelcomePage.js';
import ResultsPage from './ResultsPage.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: beers,
      breweries: breweries,
      selectedState: '',
      showWelcomeScreen: true
    }
  }

  // componentDidMount() {
  //   // fetch(`https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lynnerang/beers`)
  //   // .then(data => data.json())
  //   // .then(data => this.setState({ beers: data }))
  //   // .catch(err => console.error(error))

  //   fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lynnerang/breweries')
  //   .then(response => response.json())
  //   .then(jsonData => this.setState({ breweries: jsonData }))

  //   console.log(this.state.breweries);
  //   // .catch(err => console.error(error))
  // }

  chooseState = (e) => {
    this.setState({selectedState: e.target.innerText, showWelcomeScreen: false});
  }
  
  render() {
    let page;
    if (this.state.showWelcomeScreen) {
      page = <WelcomePage locations={this.state.locations} breweries={this.state.breweries} beers={this.state.beers} chooseState={this.chooseState}/>
    } else {
      page = <ResultsPage selectedState={this.state.selectedState} breweries={this.state.breweries} beers={this.state.beers}/>
    }
    return (<div>{page}</div>);
  }
}

export default App;
