import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../../../shared/Input/InputField';
import { FilterSector } from './FilterSector';

function setProps() {
  return {
    filterNewsByTypeAndValue: jest.fn()
  };
}

function setup() {
  const props = setProps();
  const enzymeWrapper = shallow(<FilterSector {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('A suite <FilterSector/>', () => {
  it('should render shallow render only', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.render()).toMatchSnapshot();
    enzymeWrapper.unmount();
  });

  it('should render deep DOM', () => {
    const props = setProps();
    const wrapper = renderer.create(<FilterSector {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate onChange action', () => {
    // Arrange
    const props = setProps();
    const component = mount(<FilterSector {...props} />);
    const simulateEvent = {
      target: {
        value: 'some value'
      }
    };

    // Act
    // test: simulate UI events
    component.find(Input).simulate('change', simulateEvent);
    expect(props.filterNewsByTypeAndValue).toHaveBeenCalled();
    expect(props.filterNewsByTypeAndValue).toHaveBeenCalledWith('author', 'some value');

    // Assert: component
    // console.log(' >>> component.debug()', component.debug());

    component.unmount();
  });
});
