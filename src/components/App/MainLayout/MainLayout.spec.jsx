import React from 'react';
import renderer from 'react-test-renderer';
import MainLayout from './MainLayout';

// TODO: postpone router rendering
describe('A suite MainLayout', () => {
  it('should render correctly', () => {
    const component = renderer.create(<MainLayout />);
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
  //                 <MainLayout/>
  //             </MemoryRouter>
  //         );
  //
  //         expect(render(enzymeWrapper)).toMatchSnapshot();
  //     });
  //
  //     it('should render shallow render only', () => {
  //         const enzymeWrapper = shallow(<MemoryRouter initialEntries={[item]}>
  //             <MainLayout/>
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
  //                 <MainLayout/>
  //             </MemoryRouter>)
  //             .toJSON();
  //
  //         expect(wrapper).toMatchSnapshot();
  //     });
  // });
});
