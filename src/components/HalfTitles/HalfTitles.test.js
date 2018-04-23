import React from 'react';
import { shallow } from 'enzyme';
import HalfTitles from './HalfTitles';

test('testing HalfTitles component', () => {
  const wrapper = shallow(<HalfTitles />);
  expect(wrapper).toMatchSnapshot();
});

test('testing HalfTitles when newest memes were chosen', () => {
  const wrapper = shallow(<HalfTitles chosen />);
  expect(wrapper.find('.hidden').length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});


test('testing HalfTitles when liked memes were chosen', () => {
  const wrapper = shallow(<HalfTitles chosen={false} />);
  expect(wrapper.find('.hidden').length).toBe(0);
  expect(wrapper).toMatchSnapshot();
});
