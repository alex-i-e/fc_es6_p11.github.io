import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import MainSector from './MainSector';
import * as initGoogleMap
    from './../../webApi/initGoogleMap';


describe('A suite MainSector', () => {
    [
        '/main',
        '/about',
        '/news',
        '/',
        '/randomUrl',
        '/base',
    ].forEach(item => {
        describe(`route => ${item}`, () => {
            it('should render shallow render only', () => {
                const enzymeWrapper = shallow(<MemoryRouter initialEntries={[item]}>
                    <MainSector/>
                </MemoryRouter>);

                expect(enzymeWrapper.render()).toMatchSnapshot();
                enzymeWrapper.unmount();
            });

            it('should render deep DOM', () => {
                const mockAffix = jest.spyOn(initGoogleMap, 'affixScriptToHead');

                const wrapper = renderer
                    .create(<MemoryRouter initialEntries={[item]}>
                        <MainSector/>
                    </MemoryRouter>)
                    .toJSON();

                expect(wrapper).toMatchSnapshot();
            });
        });
    });
});