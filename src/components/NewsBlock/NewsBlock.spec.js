import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Enzyme, {configure, mount, shallow} from 'enzyme';
import React from 'react';
import {NewsBlock} from './NewsBlock';
import renderer from 'react-test-renderer';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
// mock.onGet('/users').reply(200, {
//     users: [
//         {id: 1, name: 'John Smith'}
//     ]
// });
// axios.get('/users')
//     .then(function (response) {
//         console.log(response.data);
//     });


function setup() {
    const props = {
        loading: true,
        news: [],
        newsDetailsHoverIn: false,
        fetchNewsViaSaga: jest.fn(),
        fetchNewsViaEpic: jest.fn(),
    };

    const enzymeWrapper = shallow(<NewsBlock {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('News Block', () => {
    describe('when isLoading is true', () => {
        it('should render only Loader', () => {
            debugger;

            // it doesn't work with Styled components =>
            // const {enzymeWrapper} = setup();
            // expect(enzymeWrapper.html()).toEqual('<div><div>Loading...</div></div>');
            // enzymeWrapper.unmount();

            const {props} = setup();
            const wrapper = renderer
                .create(<NewsBlock {...props} />)
                .toJSON();

            console.log(' >>> wrapper: ', wrapper);
            expect(wrapper).toMatchSnapshot();
        });
    });
});