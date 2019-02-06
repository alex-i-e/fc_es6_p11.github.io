import React, { useContext } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { ThemeContext, themes } from '../../../context/theme-context';

const { Option } = Select;

const Wrapper = styled.div`
  position: fixed;
  top: 8px;
  right: 0;
  width: 100px;
`;

const PatSelect = styled(Select)`
  width: 80px;
`;

const ThemeContainer = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <PatSelect onChange={toggleTheme}>
        {Object.keys(themes).map((item, index) => (
          <Option key={index.toString()} value={item}>
            {item}
          </Option>
        ))}
      </PatSelect>
    </Wrapper>
  );
};

export default ThemeContainer;
