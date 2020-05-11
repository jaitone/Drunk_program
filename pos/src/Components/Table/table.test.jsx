import React from "react";
import Table from "../Table/table";

// Use for every test file
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Table", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Table />);
  });

  test("render a initial state of the table which is free/blue", () => {
    expect(wrapper.state("isBusy")).toBe(false);
  });

  test("render the click event and changes the state of the table which is book/red", () => {
    wrapper.find("#book-table").simulate("click");
    expect(wrapper.state("isBusy")).toBe(true);
  });

  test("it can book or unbook a table", () => {
    wrapper.find("#book-table").simulate("click");
    expect(wrapper.state("isBusy")).toBe(true);
    wrapper.find("#book-table").simulate("click");
    expect(wrapper.state("isBusy")).toBe(false);
  });

  test("it doesn't show anything if no table is selected", () => {
    console.log(wrapper.state("showTable"));
    expect(wrapper.state("showTable")).toBe(false);
  });

  test("it show a itemList if one of the table is selected", () => {
    wrapper.find("#book-table").simulate("click");
    expect(wrapper.state("showTable")).toBe(true);
  });
});
