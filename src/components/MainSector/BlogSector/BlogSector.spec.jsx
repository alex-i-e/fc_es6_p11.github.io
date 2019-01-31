import {shallow} from 'enzyme';
import React from 'react';
import {BlogSector, getVisibleBlogList} from './BlogSector';

function setup({blogList = [], value}) {
    const props = {
        blogList,
        value
    };
    const enzymeWrapper = shallow(<BlogSector {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('News Block', () => {
    it('should render shallow render only', () => {
        const {enzymeWrapper} = setup({index: ''});
        expect(enzymeWrapper.render()).toMatchSnapshot();
        enzymeWrapper.unmount();
    });

    it('should filter proper list from getVisibleBlogList', () => {
        const getFilterList = getVisibleBlogList([
            {
                'id': '1',
                'title': 'Some perfect title',
                'body': 'SOme perfect body',
                'date': '01.01.2018',
                'author': 'Torwald Linux'
            },
            {
                'id': '2',
                'title': 'Best perfect title asd ',
                'body': 'SOme perfect body asd',
                'date': '01.04.2018',
                'author': 'Washington Tom'
            }
        ], {type: 'author', value: 'Torwa'});
        expect(getFilterList).toEqual([{
            'id': '1',
            'title': 'Some perfect title',
            'body': 'SOme perfect body',
            'date': '01.01.2018',
            'author': 'Torwald Linux'
        }]);
    });
});
