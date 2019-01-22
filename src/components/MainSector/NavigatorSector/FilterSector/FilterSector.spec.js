import React from 'react';
import FilterSector from "./FilterSector";

import Enzyme, { configure, mount, shallow } from 'enzyme';
// setup file
import Adapter from 'enzyme-adapter-react-16';

import 'jsdom-global/register'
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe('A suite <FilterSector/>', () => {

  const initialState = {output:10};
  const mockStore = configureStore();
  let store,wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = mount( <Provider store={store}><FilterSector /></Provider> )
  });


  it('should render without throwing an error', () => {
    expect(shallow(<FilterSector/>).contains(
      <div className="filter-sector">
        <div className="filter-form"/>
      </div>
    )).toBe(true);
  });

  it('should render without throwing an error', () => {
    expect(shallow(<FilterSector/>).contains(
      <div className="filter">
        <label htmlFor="blog-author"/>
        <input type="text" id="blog-author"/>
      </div>
    )).toBe(true);
  });

  it('renders one .filter-form components', () => {
    const wrapper = shallow(<FilterSector/>);
    expect(wrapper.find('.filter-form').length).toBe(1);
  });

  it('should be selectable by class ".blog-author"', () => {
    const wrapper = shallow(<FilterSector/>);
    expect(wrapper.is('.blog-author')).toBe(true);
  });

  it('renders one <div> components', () => {
    const wrapper = shallow(<FilterSector/>);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should be selectable by id "blog-author"', () => {
    expect(shallow(<FilterSector/>).is('#blog-author')).toBe(false);
  });
});