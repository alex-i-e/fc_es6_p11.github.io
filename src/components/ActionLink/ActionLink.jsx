import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {ThemeContext} from '../../context/theme-context';
import PropTypes from 'prop-types';
import withToggle from '../HOC/withToggle';

const NavLinkWrapper = styled(NavLink)`
    margin: 16px;
    cursor: pointer;

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
    onSubmitPost: PropTypes.func
};


class ActionLink extends Component {
    constructor(props) {
        super(props);

        this.onClickAction = this.onClickAction.bind(this);
    }

    onClickAction(e) {
        if (this.props.onSubmitPost && this.props.onSubmitPost(e)) {
            this.props.withToggleAction && this.props.withToggleAction();
        }
    }

    render() {
        const props = this.props;
        const themeContext = this.context;

        return (
            <NavLinkWrapper to={props.urlState === 'home' ? '' : props.urlState}
                            activeStyle={{
                                textDecoration: 'none',
                                color: 'blue',
                            }}
                            onClick={this.onClickAction}
                            style={{backgroundColor: themeContext.theme.background}}>
                {props.children}
            </NavLinkWrapper>
        );
    }
}

ActionLink.propTypes = propTypes;
ActionLink.contextType = ThemeContext;

export default withToggle(ActionLink);