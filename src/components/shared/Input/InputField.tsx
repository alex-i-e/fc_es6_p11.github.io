import React, { Fragment, forwardRef, Ref } from 'react';
// import styled from 'styled-components';
import { Input } from 'antd';

// export const Input = styled.input`
//   padding: 4px 8px;
//   line-height: 16px;
// `;

// : ({ labelValue: string, id: string, required: boolean}, ref: Ref<Input>)

const InputField = forwardRef(
  ({ labelValue, id, required, ...rest }: any, ref: Ref<Input>) => {
    const label = (
      <span>
        {labelValue}
        <span style={{ color: 'red' }}>{required ? ' *' : ''}</span>
      </span>
    );
    return (
      <Fragment>
        <label htmlFor={id}>{label}</label>
        <Input {...rest} ref={ref} />
      </Fragment>
    );
  }
);

export default InputField;
