import React from 'react';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';
import {ThemeContext} from '../../context/theme-context';

const MainSector = (props) => (
    <ThemeContext.Consumer>
        {({theme}) => (
            <div className="container main-sector"
                 style={{backgroundColor: theme.background}}>
                <BlogSector/>
                <NavigatorSector/>
            </div>
        )}
    </ThemeContext.Consumer>
);

export default MainSector;