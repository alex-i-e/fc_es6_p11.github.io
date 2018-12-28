import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
import {Route, Router, Switch} from "react-router";
import {history} from '../../../../store';
import styled from 'styled-components';

const BlogBlock = styled.div`
    display: flex;
    flex-flow: column;
    
    margin: 8px;
    padding: 8px;
    box-shadow: -3px 1px 9px 0px #adadad;
`;

class BlogMakerSector extends Component {
    render() {
        return (
            <BlogBlock>
                <Router history={history}>
                    <Switch>
                        <Route path="/edit" component={BlogForm}/>
                        <Route path="/" component={BlogButton}/>
                    </Switch>
                </Router>
            </BlogBlock>
        )
    }
}

export default connect()(BlogMakerSector);