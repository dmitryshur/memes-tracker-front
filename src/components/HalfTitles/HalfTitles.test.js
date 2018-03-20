import React from 'react';
import { shallow } from 'enzyme';
import HalfTitles from './HalfTitles.jsx';

test('testing HalfTitles component', () => {
  const wrapper = shallow(<HalfTitles />);
  expect(wrapper).toMatchSnapshot();
});
