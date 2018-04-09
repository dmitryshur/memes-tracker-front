import React from "react";
import { shallow } from "enzyme";
import { HalfContent } from "./HalfContent.jsx";

test("testing HalfContent newest component", () => {
  const wrapper = shallow(<HalfContent section="newest" />);
  expect(wrapper.find(".half-content-newest").length).toBe(1);
  expect(wrapper.find('[data-id="newest"]').length).toBe(1);
  expect(wrapper.find(".half-content-title").text()).toBe("newest");
  expect(wrapper.find(".half-content-subtitle").text()).toBe("Most recent memes");
  expect(wrapper).toMatchSnapshot();
});

test("testing HalfContent newest component click simulation", () => {
  const setChosenSection = jest.fn();
  const wrapper = shallow(<HalfContent section="newest" setChosenSection={setChosenSection} />);

  wrapper.find(".half-content").simulate("click", {
    currentTarget: { dataset: { id: "newest" } }
  });
  expect(setChosenSection).toHaveBeenLastCalledWith("newest");
  expect(wrapper).toMatchSnapshot();
});

test("testing HalfContent liked component", () => {
  const wrapper = shallow(<HalfContent section="liked" />);
  expect(wrapper.find(".half-content-liked").length).toBe(1);
  expect(wrapper.find('[data-id="liked"]').length).toBe(1);
  expect(wrapper.find(".half-content-title").text()).toBe("liked");
  expect(wrapper.find(".half-content-subtitle").text()).toBe("Most liked memes");
  expect(wrapper).toMatchSnapshot();
});

test("testing HalfContent liked component click simulation", () => {
  const setChosenSection = jest.fn();
  const wrapper = shallow(<HalfContent section="liked" setChosenSection={setChosenSection} />);

  wrapper.find(".half-content").simulate("click", {
    currentTarget: { dataset: { id: "liked" } }
  });
  expect(setChosenSection).toHaveBeenLastCalledWith("liked");
  expect(wrapper).toMatchSnapshot();
});

test("testing HalfContent newest component when newest section is closed", () => {
  const wrapper = shallow(<HalfContent section="newest" openState="closed" />);
  expect(wrapper.find(".closed").length).toBe(1);
});

test("testing HalfContent newest component when newest section is opened", () => {
  const wrapper = shallow(<HalfContent section="newest" openState="opened" />);
  expect(wrapper.find(".opened").length).toBe(1);
});

test("testing HalfContent liked component when newest section is closed", () => {
  const wrapper = shallow(<HalfContent section="liked" openState="closed" />);
  expect(wrapper.find(".closed").length).toBe(1);
});

test("testing HalfContent liked component when newest section is opened", () => {
  const wrapper = shallow(<HalfContent section="liked" openState="opened" />);
  expect(wrapper.find(".opened").length).toBe(1);
});
