import React from 'react';
import BeerDescription from './BeerDescription.js';
import { shallow } from 'enzyme';

const mockData =
  {
    "FIELD1": 44,
    "abv": 0.055,
    "ibu": null,
    "id": 2324,
    "name": "Cast Iron Oatmeal Brown",
    "style": "American Brown Ale",
    "brewery_id": 60,
    "ounces": 12
  };

const mockFunc = jest.fn()

describe('BeerDescription', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <BeerDescription selectedBeer={mockData}
                             toggle={mockFunc}
            /> 
        )
    });

    it('Should match a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('Should simulate a click', () => {
        wrapper.find('.click-me').simulate('click');
        expect(mockFunc).toHaveBeenCalled();
    });
});