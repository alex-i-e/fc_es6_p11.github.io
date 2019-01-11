import React from 'react';
import BlogMakerSector from './BlogMakerSector/BlogMakerSector';
import FilterSector from './FilterSector/FilterSector';
import styled from 'styled-components';

const SidebarItem = styled.div`
   grid-area: sidebar;
   margin: 16px;
`;
const NavigatorBlock = styled(SidebarItem)`
    background-color: white;
    display: flex;
    flex-flow: column;
    
    margin: 16px;
    box-shadow: -3px 1px 9px 0px #adadad;
`;

const NavigatorSector = (props) => (
    <NavigatorBlock>
        <BlogMakerSector/>
        <FilterSector/>
    </NavigatorBlock>
);

export default NavigatorSector;