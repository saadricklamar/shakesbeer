import React from 'react';
import Breweries from './Breweries.js';
import { shallow } from 'enzyme';


const mockData = [1,2,3,4];
const mockFunc = jest.fn();


describe('Breweries', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
        <Breweries name={mockData}
                   dataset={mockData}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});