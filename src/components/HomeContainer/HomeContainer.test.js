import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer } from './HomeContainer.jsx';
import HomeHalf from '../HomeHalf/HomeHalf.jsx';

test('testing HomeContainer component', () => {
  const wrapper = shallow(<HomeContainer />);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeContainer component with newest section as the chosen section', () => {
  const wrapper = shallow(<HomeContainer chosenSection="newest" />);
  expect(wrapper.find(HomeHalf).first().props().chosen).toBe(true);
  expect(wrapper.find(HomeHalf).last().props().chosen).toBe(false);
  expect(wrapper.hasClass('newest-opened')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeContainer component with liked section as the chosen section', () => {
  const wrapper = shallow(<HomeContainer chosenSection="liked" />);
  expect(wrapper.find(HomeHalf).first().props().chosen).toBe(false);
  expect(wrapper.find(HomeHalf).last().props().chosen).toBe(true);
  expect(wrapper.hasClass('newest-opened')).toBe(false);
  expect(wrapper).toMatchSnapshot();
});
