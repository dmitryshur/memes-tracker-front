import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer.jsx';

test('testing HomeContainer component', () => {
  const wrapper = shallow(<HomeContainer />);
  expect(wrapper).toMatchSnapshot();
});
