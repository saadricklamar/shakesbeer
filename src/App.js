import React, { Component } from 'react';
import './App.css';
import WelcomePage from './WelcomePage.js';
import ResultsPage from './ResultsPage.js';
import './images/spinner.gif';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      breweries: [],
      dataset: [],
      selectedState: '',
      showWelcomeScreen: true
    }
  }

  componentDidMount = () => {
    this.getJsonData('beers');
    this.getJsonData('breweries');
  }

  getJsonData = set => {
    fetch(`https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lynnerang/${set}`)
    .then(data => data.json())
    .then(data => this.setState({ [set]: data[set] }, () => {
      this.getCombinedData();
    })) 
    .catch(error => console.error(error))
  }

  getCombinedData = () => {
    const data = this.state.breweries.reduce((acc, brewery) => {
      acc.push({
        name: brewery.name,
        state: brewery.state,
        city: brewery.city,
        beers: this.state.beers.filter(beer => beer.brewery_id === brewery.FIELD1)
      });
      return acc;
    }, []);
    this.setState({ dataset: data});
  }

  chooseState = (e) => {
    this.setState({selectedState: e.target.innerText, showWelcomeScreen: false});
  }
  
  render() {
    let page;

    if (this.state.beers.length === 0 || this.state.breweries.length === 0) {
      page = <img className='loading' src='./images/spinner.gif' alt='loading icon'/>
    } else if (this.state.showWelcomeScreen) {
      page = <WelcomePage dataset={this.state.dataset} 
                          chooseState={this.chooseState} />
    } else {
      page = <ResultsPage selectedState={this.state.selectedState} 
                          dataset={this.state.dataset} />
    }
    return (<div>{page}</div>);
  }
}

export default App;
