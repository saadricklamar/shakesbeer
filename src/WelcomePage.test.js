import React from 'react';
import WelcomePage from './WelcomePage.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4];
const mockFunc = jest.fn();

describe('WelcomePage', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <WelcomePage dataset={mockData} 
                          chooseState={mockFunc}
             />
        )
    });

    it('Should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });
});