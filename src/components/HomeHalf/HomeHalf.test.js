import React from 'react';
import { shallow } from 'enzyme';
import { HomeHalf } from './HomeHalf';

test('testing HomeHalf newest component', () => {
  const wrapper = shallow(<HomeHalf section="newest" />);
  expect(wrapper.find('.home-half-newest').length).toBeGreaterThan(0);
  expect(wrapper.find('.home-overlay-newest').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf liked component', () => {
  const wrapper = shallow(<HomeHalf section="liked" />);
  expect(wrapper.find('.home-half-liked').length).toBeGreaterThan(0);
  expect(wrapper.find('.home-overlay-liked').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf newest component with default state', () => {
  const wrapper = shallow(<HomeHalf section="newest" />);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf newest component with opened state', () => {
  const wrapper = shallow(<HomeHalf section="newest" chosen={true} />);
  expect(wrapper.find('.opened').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf newest component with closed state', () => {
  const wrapper = shallow(<HomeHalf section="newest" chosen={false} />);
  expect(wrapper.find('.closed').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf liked component with default state', () => {
  const wrapper = shallow(<HomeHalf section="liked" />);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf liked component with opened state', () => {
  const wrapper = shallow(<HomeHalf section="liked" chosen={true} />);
  expect(wrapper.find('.opened').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf liked component with closed state', () => {
  const wrapper = shallow(<HomeHalf section="liked" chosen={false} />);
  expect(wrapper.find('.closed').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf newest component when the back arrow is clicked', () => {
  const resetSections = jest.fn();
  const wrapper = shallow(<HomeHalf section="newest" chosen={true} resetSections={resetSections}/>);
  wrapper.find('.back-arrow').simulate('click');
  expect(resetSections).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});

test('testing HomeHalf liked component when the back arrow is clicked', () => {
  const resetSections = jest.fn();
  const wrapper = shallow(<HomeHalf section="liked" chosen={true} resetSections={resetSections}/>);
  wrapper.find('.back-arrow').simulate('click');
  expect(resetSections).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});
