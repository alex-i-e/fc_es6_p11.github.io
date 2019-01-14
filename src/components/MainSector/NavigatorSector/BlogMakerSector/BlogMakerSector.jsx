import React from 'react';
import BlogForm from './BlogForm/BlogForm';
import {Route, Router, Switch} from 'react-router';
import {history} from '../../../../store';
import styled from 'styled-components';
import ActionLink from '../../../ActionLink/ActionLink';

const BlogBlock = styled.div`
    display: flex;
    flex-flow: column;
    
    margin: 8px;
    padding: 8px;
    box-shadow: -3px 1px 9px 0px #adadad;
`;

const BlogMakerSector = (props) => {
    return (
        <BlogBlock>
            <Router history={history}>
                <Switch>
                    <Route path="/main/edit" exact component={BlogForm}/>
                    <Route path="/main" exact render={() => (
                        <ActionLink urlState="main/edit">Create new Post</ActionLink>
                    )}/>
                </Switch>
            </Router>
        </BlogBlock>
    );
};

export default BlogMakerSector;