import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { RemoveBlog, RemoveWrapper } from './RemoveBlog';

function setProps({ removeBlog = jest.fn(), index }) {
  return {
    index,
    removeBlog
  };
}

function setup({ removeBlog, index }) {
  const props = setProps({
    index,
    removeBlog
  });

  const enzymeWrapper = shallow(<RemoveBlog {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('News Block', () => {
  it('should render shallow render only', () => {
    const { enzymeWrapper } = setup({ index: '1' });

    expect(enzymeWrapper.render()).toMatchSnapshot();

    enzymeWrapper.unmount();
  });

  it('should render proper renderer', () => {
    const props = setProps({ index: '1' });
    const wrapper = renderer.create(<RemoveBlog {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should proper invoke call functions on onClickAction', () => {
    // Arrange
    const props = setProps({ index: '1' });
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
