import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {ThemeContext} from '../../context/theme-context';
import PropTypes from 'prop-types';

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
// type Props = {
//     urlState: string,
//     children?: string,
//     onSubmitPost?: (e: SyntheticEvent<HTMLElement>) => void,
// };

// const FilterLink = (props: Props) => (
//     <NavLinkWrapper to={props.urlState === 'home' ? '' : props.urlState}
//                     activeStyle={{
//                         textDecoration: 'none',
//                         color: 'blue',
//                     }}
//                     onClick={props.onSubmitPost}>
//         {props.children}
//     </NavLinkWrapper>
// );

const propTypes = {
    urlState: PropTypes.string.isRequired,
    onSubmitPost: PropTypes.func.isRequired
};


class FilterLink extends Component {
    render() {
        const props = this.props;
        const theme = this.context;

        return (
            <NavLinkWrapper to={props.urlState === 'home' ? '' : props.urlState}
                            activeStyle={{
                                textDecoration: 'none',
                                color: 'blue',
                            }}
                            onClick={props.onSubmitPost}
                            style={{backgroundColor: theme.background}}>
                {props.children}
            </NavLinkWrapper>
        );
    }
}

FilterLink.propTypes = propTypes;
FilterLink.contextType = ThemeContext;

export default FilterLink;