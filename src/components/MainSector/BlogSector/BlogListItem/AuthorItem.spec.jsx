import { shallow } from 'enzyme';
import React from 'react';
import AuthorItem from './AuthorItem';

function setup({ value, matchingValue }) {
  const props = {
    value,
    matchingValue
  };
  const enzymeWrapper = shallow(<AuthorItem {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('AuthorItem', () => {
  it('should render with empty matchingValue', () => {
    const { enzymeWrapper } = setup({
      value: 'Torwwald',
      matchingValue: ''
    });
    expect(enzymeWrapper.render()).toMatchSnapshot();
    enzymeWrapper.unmount();
  });

  it('should render with matched matchingValue', () => {
    const { enzymeWrapper } = setup({
      value: 'Torwwald',
      matchingValue: 'Tor'
    });
    expect(enzymeWrapper.render()).toMatchSnapshot();
    enzymeWrapper.unmount();
  });
});
