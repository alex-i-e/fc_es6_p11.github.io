import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {mount, shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import {NewsBlock} from './NewsBlock';
import NewsDetails from './NewsDetails/NewsDetails';

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

function setProps({
                      loading = true,
                      news = [],
                      newsDetailsHoverIn = false,
                      ...rest
                  }) {

    return {
        loading,
        news,
        newsDetailsHoverIn,
        fetchNewsViaSaga: jest.fn(),
        fetchNewsViaEpic: jest.fn(),
        hoverNewsDetails: jest.fn(),
    };
}

function setup({
                   loading = true,
                   news = [],
                   newsDetailsHoverIn = false,
                   ...rest
               }) {
    const props = setProps({
        loading,
        news,
        newsDetailsHoverIn
    });

    const enzymeWrapper = shallow(<NewsBlock {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('News Block', () => {
    describe('when isLoading is true', () => {
        it('should proper call ComponentDidMount', () => {
            const {props, enzymeWrapper} = setup({
                loading: true,
                newsDetailsHoverIn: false
            });

            // first call componentDidMount when init instance
            const instance = enzymeWrapper.instance();

            // call componentDidMount will force new update
            // instance.componentDidMount();
            expect(instance.props.fetchNewsViaSaga).toHaveBeenCalledTimes(1);
            expect(instance.props.fetchNewsViaEpic).toHaveBeenCalledTimes(1);

            enzymeWrapper.unmount();
        });

        it('should render shallow render only', () => {
            const {props, enzymeWrapper} = setup({
                loading: true,
                newsDetailsHoverIn: false
            });

            expect(enzymeWrapper.render()).toMatchSnapshot();

            enzymeWrapper.unmount();
        });

        it('should render only Loader', () => {
            const props = setProps({
                loading: true,
                newsDetailsHoverIn: false
            });
            const wrapper = renderer
                .create(<NewsBlock {...props} />)
                .toJSON();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when isLoading is false', () => {
        it('should render shallow render only when hoverIn is true', () => {
            const {props, enzymeWrapper} = setup({
                loading: false,
            });

            enzymeWrapper.setState({newsDetailsHoverIn: true});
            expect(enzymeWrapper.render()).toMatchSnapshot();

            enzymeWrapper.unmount();
        });

        it('should render shallow render only when hoverIn is false', () => {
            const {props, enzymeWrapper} = setup({
                loading: false,
            });

            enzymeWrapper.setState({newsDetailsHoverIn: false});
            expect(enzymeWrapper.render()).toMatchSnapshot();

            enzymeWrapper.unmount();
        });

        it('should proper invoke call functions on componentDidMount', () => {
            // Arrange
            const props = setProps({
                loading: false,
            });
            const component = mount(<NewsBlock {...props}/>);
            component.setState({newsDetailsHoverIn: false});

            // Act
            // test: simulate UI events
            component.find('div.loaded').simulate('mouseEnter');
            expect(component.state().newsDetailsHoverIn).toEqual(true);
            component.find('div.loaded').simulate('mouseLeave');
            expect(component.state().newsDetailsHoverIn).toEqual(false);

            // test: check componentDidMount
            expect(props.fetchNewsViaSaga).toHaveBeenCalledWith('us');
            expect(props.fetchNewsViaEpic).toHaveBeenCalledWith('ru');

            // test: check forwarding attributes into child components
            expect(component.find('NewsDetails').props())
                .toEqual({
                    classAnimation: 'showOff',
                    news: [],
                });
            expect(component.find('NewsDetails').prop('classAnimation'))
                .toEqual('showOff');
            // Assert: component
            // console.log(' >>> component.debug()', component.debug());

            component.unmount();
        });

        // it('should render when hoverIn is true and news exist', () => {
        //     props.news = [
        //         {
        //             url: 'www.example1.com',
        //             urlToImage: 'www.exampleToImage1.com',
        //             title: 'Title1',
        //             author: 'Author Name',
        //             source: {
        //                 name: 'BBC'
        //             },
        //             description: 'A lot of news...',
        //             publishedAt: 'Jan 1, 2018 12:00 AM'
        //         },
        //         {
        //             url: 'www.example2.com',
        //             urlToImage: 'www.exampleToImage2.com',
        //             title: 'Title2',
        //             author: 'Another Author Name',
        //             source: {
        //                 name: 'CNN'
        //             },
        //             description: 'A lot of news...',
        //             publishedAt: 'Jan 2, 2018 12:00 AM'
        //         }
        //     ];
        //     const wrapper = renderer
        //         .create(<NewsBlock {...props} />)
        //         .toJSON();
        //     expect(wrapper).toMatchSnapshot();
        // });
    });
});