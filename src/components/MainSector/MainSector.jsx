import React, {Component} from 'react';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';

const MainSector = (props) => {
    return (
        <div className="container main-sector">
            <BlogSector/>
            <NavigatorSector/>
        </div>
    );
};

export default MainSector;