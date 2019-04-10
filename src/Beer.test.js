import React from 'react';
import Beer from './Beer.js';
import { shallow } from 'enzyme';

const mockData = [1,2,3,4];
const mockFunc = jest.fn();

describe('Beer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow (
        <Beer beers={mockData}
              beerName={mockData}
              key={mockData}

        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


});