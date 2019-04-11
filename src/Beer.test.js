import React from 'react';
import Beer from './Beer.js';
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


describe('Beer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
        <Beer beers={mockData[0].beers}
              beerName={mockData}
              key={mockData}

        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should have default state', () => {
    expect(wrapper.state()).toEqual(
      {
        selectedBeer: {},
        isDisplayed: false,
        chosenBeerName: '' 
      }
    )
  });

  it('Should toggle the state of isDisplayed', () => {
    expect(wrapper.state('isDisplayed')).toEqual(false);
    wrapper.instance().toggleDiscription();
    expect(wrapper.state('isDisplayed')).toEqual(true);
  });

  it('Should setState of selectedBeer', () => {
    console.log(wrapper.state().chosenBeerName)
    wrapper.state().chosenBeerName = 'Alter Ego'
    expect(wrapper.state('selectedBeer')).toEqual({});
    wrapper.instance().findBeer();
    expect(wrapper.state('selectedBeer')).toEqual(
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
      )
  });

});