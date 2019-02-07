import React, { Fragment } from 'react';
// import styled from 'styled-components';
import { Input } from 'antd';

// export const Input = styled.input`
//   padding: 4px 8px;
//   line-height: 16px;
// `;

const InputField = React.forwardRef(({ labelValue, id, ...rest }, ref) => {
  const label = (
    <span>
      {labelValue}
      <span style={{ color: 'red' }}>{rest.required ? ' *' : ''}</span>
    </span>
  );
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <Input {...rest} ref={ref} />
    </Fragment>
  );
});

export default InputField;
