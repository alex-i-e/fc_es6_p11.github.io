import React from 'react';
import renderer from 'react-test-renderer';
import MainSector from './MainSector';

// TODO: postpone router rendering
describe('A suite MainSector', () => {
    it('should render correctly', () => {
        const component = renderer.create(<MainSector />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    // [
    //     '/main',
    //     '/about',
    //     '/news',
    //     '/',
    //     '/randomUrl',
    //     '/base',
    // ].forEach(item => {
    //     it('should render MOUNT render ', () => {
    //         const enzymeWrapper = mount(
    //             <MemoryRouter initialEntries={[item]}>
    //                 <MainSector/>
    //             </MemoryRouter>
    //         );
    //
    //         expect(render(enzymeWrapper)).toMatchSnapshot();
    //     });
    //
    //     it('should render shallow render only', () => {
    //         const enzymeWrapper = shallow(<MemoryRouter initialEntries={[item]}>
    //             <MainSector/>
    //         </MemoryRouter>);
    //
    //         expect(enzymeWrapper.render()).toMatchSnapshot();
    //         enzymeWrapper.unmount();
    //     });
    //
    //     it('should render deep DOM', () => {
    //         const mockAffix123 = jest.spyOn(initGoogleMap, 'affixScriptToHead');
    //
    //         const wrapper = renderer
    //             .create(<MemoryRouter initialEntries={[item]}>
    //                 <MainSector/>
    //             </MemoryRouter>)
    //             .toJSON();
    //
    //         expect(wrapper).toMatchSnapshot();
    //     });
    // });
});