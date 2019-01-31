import React, {Fragment} from 'react';
import styled from 'styled-components';

export const Input = styled.input`
    padding: 4px 8px;
    line-height: 16px;
`;


const InputField = React.forwardRef((props, ref) => {
    return (
        // id={props.id}
        <Fragment>
            <label htmlFor={props.id}>{props.labelValue}</label>
            <Input {...props} ref={ref} />
        </Fragment>
    );
});

export default InputField;