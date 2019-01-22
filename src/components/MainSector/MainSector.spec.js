import React from 'react';
import MainSector from './MainSector';
import {BlogSector} from './BlogSector/BlogSector';
import {NavigatorSector} from './NavigatorSector/NavigatorSector';

// setup file ReactTestUtils and renderer
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';


import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme, {configure, mount, shallow} from 'enzyme';
import createSagaMiddleware from 'redux-saga';
import {createEpicMiddleware} from 'redux-observable';

describe('A suite <MainSector/>', () => {

    const initialState = {output: 10};
    const middlewares = [createSagaMiddleware, createEpicMiddleware];
    const mockStore = configureStore();
    let store, wrapper;

    // beforeEach(() => {
    //   store = mockStore(initialState);
    //   wrapper = mount(<Provider store={store}><MainSector /></Provider>)
    // })


    it('should render without throwing an error', () => {
        expect(shallow(<MainSector/>).contains(
            <div className="container main-sector">
                <BlogSector className="test-blog-sector"/>
                <NavigatorSector className="test-navigator-sector"/>
            </div>
        )).toBe(true);
    });

    it('renders one <BlogSector /> components', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.find('.test-blog-sector').length).toBe(1);
    });

    it('should be selectable by class ".container.main-sector"', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.is('.container.main-sector')).toBe(true);
    });

    it('renders one <div> components', () => {
        const wrapper = shallow(<MainSector/>);
        expect(wrapper.find('div').length).toBe(1);
    });

    it('should be selectable by class "foo"', () => {
        expect(shallow(<MainSector/>).is('.foo')).toBe(false);
    });

    // it('renders correctly', () => {
    //     const tree = renderer
    //         .create(<MainSector/>)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});