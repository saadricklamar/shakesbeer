import React from 'react';
import Controls from './Controls.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4]
const mockFunc = jest.fn()

describe('Controls', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow (
            <Controls breweryCities={mockData} 
                      beerStyles={mockData}
                      filterByCity={mockFunc}
                      filterSelections={mockData}
                      updateFilterSelection={mockFunc}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    // it('Should simulate an onChange event', () => {
    //     wrapper.find('#city-filter').simulate('change', {target:{value: 'e'}});
    //     expect(mockFunc).toBeCalled();
    // });

    // it('Should simulate an onChange event', ()=> {
    //     wrapper.find('#style-filter').simulate('change', {target:{value: 'e'}});
    //     expect(mockFunc).toBeCalled();
    // });
});