import React from "react";
import { shallow } from "enzyme";
import { MemesContainer } from "./MemesContainer";

test("testing the rendering of the MemesContainer component of the liked section when opened", () => {
  const wrapper = shallow(<MemesContainer section="liked" chosenSection="liked" />);
  expect(wrapper).toMatchSnapshot();
});

test("testing the rendering of the MemesContainer component of the liked section when closed", () => {
  const wrapper = shallow(<MemesContainer section="liked" chosenSection="newest" />);
  expect(wrapper).toMatchSnapshot();
});

test("testing the rendering of the MemesContainer component of the newest section when opened", () => {
  const wrapper = shallow(<MemesContainer section="newest" chosenSection="newest" />);
  expect(wrapper).toMatchSnapshot();
});

test("testing the rendering of the MemesContainer component of the newest section when closed", () => {
  const wrapper = shallow(<MemesContainer section="newest" chosenSection="liked" />);
  expect(wrapper).toMatchSnapshot();
});
