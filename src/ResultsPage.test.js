import React from 'react';
import ResultsPage from './ResultsPage.js';
import { shallow } from 'enzyme';

const mockData = [
  {
  "FIELD1": 90,
  "name": "The Lion Brewery",
  "city": "Wilkes-Barre",
  "state": "Pennsylvania",
  "beers": [ {
      "FIELD1": 43,
      "abv": 0.045,
      "ibu": 18,
      "id": 2544,
      "name": "Send Help",
      "style": "American Blonde Ale",
      "brewery_id": 60,
      "ounces": 12
    },
    {
      "FIELD1": 44,
      "abv": 0.055,
      "ibu": null,
      "id": 2324,
      "name": "Cast Iron Oatmeal Brown",
      "style": "American Brown Ale",
      "brewery_id": 60,
      "ounces": 12
    },
    {
      "FIELD1": 45,
      "abv": 0.06,
      "ibu": null,
      "id": 2288,
      "name": "Reprise Centennial Red",
      "style": "American Amber / Red Ale",
      "brewery_id": 60,
      "ounces": 12
    },
    {
      "FIELD1": 46,
      "abv": 0.055,
      "ibu": null,
      "id": 2287,
      "name": "Alter Ego",
      "style": "American Black Ale",
      "brewery_id": 60,
      "ounces": 12
    }
  ]
  }
]
const mockFunc = jest.fn()

describe('ResultsPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
          <ResultsPage selectedState={mockData}
                       dataset={mockData}
          />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have default state', () => {
    expect(wrapper.state()).toEqual(
      {
        stateBreweries: [],
        filteredBreweries: [],
        breweryCities: [],
        beerStyles: [],
        beerIbus: [],
        citySelection: 'All', 
        styleSelection: 'All',
        ibuSelection: 'All', 
        abvSelection: 'All'
      }
    )
  });

  it('Should setState for breweryCities', () => {
    wrapper.setState({stateBreweries: mockData});
    expect(wrapper.state('breweryCities')).toEqual([]);
    wrapper.instance().getCities();
    expect(wrapper.state('breweryCities')).toEqual(['Wilkes-Barre']);
  });




});