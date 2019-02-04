import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext, themes } from '../../context/theme-context';

const Wrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  margin: 8px;
  width: 100px;
`;

const ThemeContainer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <Wrapper>
      <select onChange={toggleTheme} style={{ backgroundColor: theme.background }}>
        {Object.keys(themes).map((item, index) => (
          <option key={index.toString()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default ThemeContainer;
