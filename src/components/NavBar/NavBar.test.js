import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './NavBar';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

test('testing NavBar when closed', () => {
  const wrapper = shallow(<NavBar navbarStatus="closed" />);
  expect(wrapper.text()).toBe('+');
  expect(wrapper.find('#cn-wrapper').hasClass('opened-nav')).toBe(false);
  expect(wrapper.find('#cn-overlay').hasClass('on-overlay')).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test('testing NavBar when opened', () => {
  const wrapper = shallow(<NavBar navbarStatus="opened" />);
  expect(wrapper.text()).toBe('-');
  expect(wrapper.find('#cn-wrapper').hasClass('opened-nav')).toBe(true);
  expect(wrapper.find('#cn-overlay').hasClass('on-overlay')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test("testing NavBar click when it's initially closed", () => {
  const toggleNavbar = jest.fn();
  const wrapper = shallow(<NavBar navbarStatus="closed" toggleNavbar={toggleNavbar} />);

  Promise.resolve()
    .then(() => {
      wrapper.find('#cn-button').simulate('click', { stopPropagation: () => {} });
      return delay(3000);
    })
    .then(() => {
      expect(toggleNavbar).toHaveBeenCalled();
      expect(wrapper.text()).toBe('-');
      expect(wrapper.find('#cn-wrapper').hasClass('opened-nav')).toBe(false);
      expect(wrapper.find('#cn-overlay').hasClass('on-overlay')).toBe(false);
      expect(wrapper).toMatchSnapshot();
    });
});

test("testing NavBar click when it's opened", () => {
  const toggleNavbar = jest.fn();
  const wrapper = shallow(<NavBar navbarStatus="opened" toggleNavbar={toggleNavbar} />);

  Promise.resolve()
    .then(() => {
      wrapper.find('#cn-button').simulate('click', { stopPropagation: () => {} });
      return delay(3000);
    })
    .then(() => {
      expect(toggleNavbar).toHaveBeenCalled();
      expect(wrapper.text()).toBe('+');
      expect(wrapper.find('#cn-wrapper').hasClass('opened-nav')).toBe(true);
      expect(wrapper.find('#cn-overlay').hasClass('on-overlay')).toBe(true);
      expect(wrapper).toMatchSnapshot();
    });
});
