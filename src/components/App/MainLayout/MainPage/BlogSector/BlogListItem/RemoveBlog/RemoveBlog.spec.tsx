import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { RemoveBlog, RemoveWrapper, RemoveBlogType } from './RemoveBlog';

function setProps(index: string): RemoveBlogType {
  return {
    index,
    removeBlog: jest.fn()
  };
}

function setup({ removeBlog, index }: RemoveBlogType) {
  const props = setProps(index);

  const enzymeWrapper = shallow(<RemoveBlog {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('News Block', () => {
  it('should render shallow render only', () => {
    const { enzymeWrapper } = setup(setProps('1'));

    expect(enzymeWrapper.render()).toMatchSnapshot();

    enzymeWrapper.unmount();
  });

  it('should render proper renderer', () => {
    const props = setProps('1');
    const wrapper = renderer.create(<RemoveBlog {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should proper invoke call functions on onClickAction', () => {
    // Arrange
    const props = setProps('1');
    const component = mount(<RemoveBlog {...props} />);

    // Act
    // test: simulate UI events
    component.find(RemoveWrapper).simulate('click');

    // test: check componentDidMount
    expect(props.removeBlog).toHaveBeenCalledWith('1');

    // Assert: component
    // console.log(' >>> component.debug()', component.debug());

    component.unmount();
  });
});
