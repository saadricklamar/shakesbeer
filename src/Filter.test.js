import React from 'react';
import Filter from './Filter.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4]
const mockFunc = jest.fn()

describe('Filter', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <Filter filterName="string" 
                    label="string" 
                    filterOptions={mockData} 
                    updateSelected={mockFunc} 
            />
        )
    });

    it('Should have a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});