import React from 'react';
import Autocomplete from './Autocomplete.js';
import { shallow } from 'enzyme';


const mockData = [1,2,3,4];
const mockFunc = jest.fn();

describe('Autocomplete', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
        <Autocomplete suggestions={mockData}
                      dataset={mockData}
                      chooseState={mockFunc}
        />
      )

  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });




});