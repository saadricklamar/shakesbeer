import React from 'react';
import ResultsPage from './ResultsPage.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4]
const mockFunc = jest.fn()

describe('ResultsPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
          <ResultsPage selectedState={mockData}
                       dataset={mockData}
          />
      )
  });
  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });





});