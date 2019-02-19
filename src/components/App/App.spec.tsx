import shallow from 'enzyme/shallow';
import React from 'react';
import configureStore from 'redux-mock-store';
import { App } from './App';

// TODO: need workaround connected component
// it('should render DOM withour crashing', () => {
//     const wrapper = renderer.create(<App />).toJSON();
// });

test.skip('should render shallow DOM', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  const props = {
    changeTheme: jest.fn(),
    initTheme: {
      foreground: '#fff',
      background: '#fff'
    }
  };

  const enzymeWrapper = shallow(<App {...props} />);

  expect(enzymeWrapper.render()).toMatchSnapshot();
  enzymeWrapper.unmount();
});
