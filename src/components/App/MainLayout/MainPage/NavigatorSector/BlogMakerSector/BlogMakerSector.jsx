import React from 'react';
import { Route, Router, Switch } from 'react-router';
import styled from 'styled-components';
import { history } from '../../../../../../store';
import ActionLink from '../../../../../shared/ActionLink/ActionLink';
import BlogForm from './BlogForm/BlogForm';

const BlogBlock = styled.div`
  display: flex;
  flex-flow: column;

  margin: 8px;
  padding: 8px;
  box-shadow: -3px 1px 9px 0px #adadad;
`;

const BlogMakerSector = () => {
  return (
    <BlogBlock>
      <Router history={history}>
        <Switch>
          <Route path="/main/edit" exact component={BlogForm} />
          <Route
            path="/main"
            exact
            render={() => (
              <ActionLink titleText="Ctrl + Q" type="primary" urlState="/main/edit">
                Create record
              </ActionLink>
            )}
          />
        </Switch>
      </Router>
    </BlogBlock>
  );
};

export default BlogMakerSector;
