import React from 'react';
import BreweryList from './BreweryList.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4]

describe('BreweryList', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <BreweryList filteredBreweries={mockData} 
                         dataset={mockData}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});