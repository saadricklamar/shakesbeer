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
                      beerIbus={mockFunc}
                      updateFilterSelection={mockFunc}
            />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('Should simulate an onChange event', () => {
        const mockEvent = {target:{value:'e'}}
        wrapper.instance().updateCity(mockEvent)
        expect(mockFunc).toHaveBeenCalledWith('city', 'e')
    });

    it('Should simulate an onChange event', () => {
        const mockEvent = {target:{value:'e'}}
        wrapper.instance().updateStyle(mockEvent)
        expect(mockFunc).toHaveBeenCalledWith('style', 'e')
    });

    it('Should simulate an onChange event', () => {
        const mockEvent = {target:{value:'e'}}
        wrapper.instance().updateIbu(mockEvent)
        expect(mockFunc).toHaveBeenCalledWith('ibu', 'e')
    });
});