import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../../context/theme-context';

const Wrapper = styled.div`
    position: relative;
    top: 0;
    right: 0;
    margin: 8px;
    width: 100px;
`;

const ThemeContainer = (props) => (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
            <Wrapper>
                <select onChange={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                    {['light', 'dark', 'red', 'green', 'blue', 'default'].map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </Wrapper>
        )}
    </ThemeContext.Consumer>
);

export default ThemeContainer;