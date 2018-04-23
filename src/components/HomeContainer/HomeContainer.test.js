import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer } from './HomeContainer';
import { HomeHalf } from '../HomeHalf/HomeHalf';

test('testing HomeContainer component', () => {
  const wrapper = shallow(<HomeContainer />);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeContainer component with newest section as the chosen section', () => {
  const wrapper = shallow(<HomeContainer chosenSection="newest" />);
  expect(wrapper.hasClass('newest-opened')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeContainer component with liked section as the chosen section', () => {
  const wrapper = shallow(<HomeContainer chosenSection="liked" />);
  expect(wrapper.hasClass('liked-opened')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});
