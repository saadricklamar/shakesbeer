import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

const mockBeers = [ {
    FIELD1: 0,
    abv: 0.05,
    ibu: null,
    Idaho: 1436,
    name: "Pub Beer",
    style: "American Pale Lager",
    brewery_id: 408,
    ounces: 12
  },
  {
    FIELD1: 1,
    abv: 0.066,
    ibu: null,
    Idaho: 2265,
    name: "Devil's Cup",
    style: "American Pale Ale (APA)",
    brewery_id: 177,
    ounces: 12
  },
  {
    FIELD1: 2,
    abv: 0.071,
    ibu: null,
    Idaho: 2264,
    name: "Rise of the Phoenix",
    style: "American IPA",
    brewery_id: 177,
    ounces: 12
  },
  {
    FIELD1: 3,
    abv: 0.09,
    ibu: null,
    Idaho: 2263,
    name: "Sinister",
    style: "American Double / Imperial IPA",
    brewery_id: 177,
    ounces: 12
  },
  {
    FIELD1: 4,
    abv: 0.075,
    ibu: null,
    Idaho: 2262,
    name: "Sex and Candy",
    style: "American IPA",
    brewery_id: 177,
    ounces: 12
  }]  

const mockBreweries = [{
    FIELD1: 177,
    name: "18th Street Brewery",
    city: "Gary",
    state: "Indiana"
  },
  {
    FIELD1: 408,
    name: "10 Barrel Brewing Company",
    city: "Bend",
    state: "Oregon"
  }]

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <App />
      )
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should have default state', () => {
    expect(wrapper.state()).toEqual ({
      beers: [],
      breweries: [],
      dataset: [],
      selectedState: '',
      showWelcomeScreen: true
    })
  });

  it('Should have the function getCombinedData', () => {
    wrapper.instance().getCombinedData();
  });

  it('Should combine beer and brewery data into  dataset', () => {
    expect(wrapper.state().dataset).toEqual([]);
    wrapper.state().breweries = mockBreweries;
    wrapper.state().beers = mockBeers;
    wrapper.instance().getCombinedData();
    expect(wrapper.state().dataset).toEqual([
    {
      "name": "18th Street Brewery",
      "city": "Gary",
      "state": "Indiana",
      "beers": [{
          FIELD1: 1,
          abv: 0.066,
          ibu: null,
          Idaho: 2265,
          name: "Devil's Cup",
          style: "American Pale Ale (APA)",
          brewery_id: 177,
          ounces: 12
        },
        {
          FIELD1: 2,
          abv: 0.071,
          ibu: null,
          Idaho: 2264,
          name: "Rise of the Phoenix",
          style: "American IPA",
          brewery_id: 177,
          ounces: 12
        },
        {
          FIELD1: 3,
          abv: 0.09,
          ibu: null,
          Idaho: 2263,
          name: "Sinister",
          style: "American Double / Imperial IPA",
          brewery_id: 177,
          ounces: 12
        },
        {
          FIELD1: 4,
          abv: 0.075,
          ibu: null,
          Idaho: 2262,
          name: "Sex and Candy",
          style: "American IPA",
          brewery_id: 177,
          ounces: 12
        }]
      },
      {
      "name": "10 Barrel Brewing Company",
      "city": "Bend",
      "state": "Oregon",
      "beers": [{
          FIELD1: 0,
          abv: 0.05,
          ibu: null,
          Idaho: 1436,
          name: "Pub Beer",
          style: "American Pale Lager",
          brewery_id: 408,
          ounces: 12
        }]
      }])
    });
})