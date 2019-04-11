import React from 'react';
import Breweries from './Breweries.js';
import { shallow } from 'enzyme';

const mockFunc = jest.fn();
const mockData = [
    {
    "FIELD1": 90,
    "name": "The Lion Brewery",
    "city": "Wilkes-Barre",
    "state": "PA",
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

describe('Breweries', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <Breweries  name={mockData[0].name}
                        id={mockData[0].id}
                        dataset={mockData}
                        starredBreweries={mockData}
                        updateStarredList={mockFunc}
                        key={0}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should have default state', () => {
        expect(wrapper.state()).toEqual({beerList: []})
    });

    // it('Should find the beer and setState', () => {
    //     wrapper.state().breweryName = "The Lion Brewery"
    //     expect(wrapper.state('beerList')).toEqual([])
    //     wrapper.instance().findBeers()
    //     expect(wrapper.state('beerList')).toEqual([ {
    //         "FIELD1": 43,
    //         "abv": 0.045,
    //         "ibu": 18,
    //         "id": 2544,
    //         "name": "Send Help",
    //         "style": "American Blonde Ale",
    //         "brewery_id": 60,
    //         "ounces": 12
    //       },
    //       {
    //         "FIELD1": 44,
    //         "abv": 0.055,
    //         "ibu": null,
    //         "id": 2324,
    //         "name": "Cast Iron Oatmeal Brown",
    //         "style": "American Brown Ale",
    //         "brewery_id": 60,
    //         "ounces": 12
    //       },
    //       {
    //         "FIELD1": 45,
    //         "abv": 0.06,
    //         "ibu": null,
    //         "id": 2288,
    //         "name": "Reprise Centennial Red",
    //         "style": "American Amber / Red Ale",
    //         "brewery_id": 60,
    //         "ounces": 12
    //       },
    //       {
    //         "FIELD1": 46,
    //         "abv": 0.055,
    //         "ibu": null,
    //         "id": 2287,
    //         "name": "Alter Ego",
    //         "style": "American Black Ale",
    //         "brewery_id": 60,
    //         "ounces": 12
    //       }
    //     ])
    // });

    // it('Should setState of breweryName to the target given', () => {
    //     const instance = wrapper.instance()
    //     const mockTarget = {target:{innerText: "The Lion Brewery"}}
    //     expect(wrapper.state('breweryName')).toEqual('')
    //     instance.getTarget(mockTarget)
    //     expect(wrapper.state('breweryName')).toEqual("The Lion Brewery")
    // });
});

