import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../../context/theme-context';
import withToggle from '../../HOC/withToggle';

const NavLinkWrapper = styled(NavLink)`
  display: inline-block;
  color: black;
  height: 32px;
  margin-top: 16px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  line-height: 3;
  background-color: ${props => props.theme.background};

  box-shadow: -3px 1px 18px 0 #adadad;
  text-decoration: none;

  &:hover {
    box-shadow: -3px 1px 9px 5px #adadad;
  }
  &:active {
    color: orangered;
  }
`;

const propTypes = {
  urlState: PropTypes.string.isRequired,
  onSubmitPost: PropTypes.func.isRequired,
  withToggleAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

class ActionLink extends Component {
  constructor(props) {
    super(props);

    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction(e) {
    if (this.props.onSubmitPost && this.props.onSubmitPost(e)) {
      this.props.withToggleAction();
    }
  }

  render() {
    const { urlState, children } = this.props;
    const themeContext = this.context;

    return (
      <NavLinkWrapper to={urlState} theme={themeContext.theme} onClick={this.onClickAction}>
        {children}
      </NavLinkWrapper>
    );
  }
}

ActionLink.propTypes = propTypes;
ActionLink.contextType = ThemeContext;

export default withToggle(ActionLink);
