import { mount, shallow } from 'enzyme';
import React from 'react';
import { AddBlog, BtnWrapper } from './AddBlog';

function setup({ topic }) {
  const props = {
    addNewBlog: jest.fn(),
    topic
  };
  const enzymeWrapper = shallow(<AddBlog {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('AddBlog', () => {
  it('should render shallow DOM', () => {
    const { enzymeWrapper } = setup({
      topic: {
        source: {
          name: 'New topic'
        },
        author: 'Torwald',
        title: 'Title',
        description: 'Some theme...',
        urlToImage: '',
        publishedAt: '01/01/2000'
      }
    });

    expect(enzymeWrapper.render()).toMatchSnapshot();
    enzymeWrapper.unmount();
  });

  it('should simulate onClick action', () => {
    // Arrange
    jest.spyOn(Math, 'random').mockReturnValue('123');
    const { props } = setup({
      topic: {
        source: {
          name: 'New topic'
        },
        author: 'Torwald',
        title: 'Title',
        description: 'Some theme...',
        urlToImage: '',
        publishedAt: '01/01/2000'
      }
    });
    const component = mount(<AddBlog {...props} />);

    // Act
    // test: simulate UI events
    component.find(BtnWrapper).simulate('click');
    expect(props.addNewBlog).toHaveBeenCalledWith({
      id: '1230000',
      author: 'New topic - Torwald',
      title: 'Title',
      body: 'Some theme...',
      image: '',
      date: '01/01/2000'
    });

    // Assert: component
    // console.log(' >>> component.debug()', component.debug());

    component.unmount();
  });
});
