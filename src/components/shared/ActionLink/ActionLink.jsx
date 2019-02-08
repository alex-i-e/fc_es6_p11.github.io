import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const propTypes = {
  urlState: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const ActionLink = forwardRef(({ onClick, urlState, children, ...props }, ref) => {
  // const inputRef = useRef();

  // useImperativeHandle(ref, () => ({
  //   click: () => {
  //     inputRef.current.click();
  //   }
  // }));
  // onClick={onClick}
  return (
    <Button onClick={onClick} {...props}>
      <Link to={urlState} ref={ref}>
        {children}
      </Link>
    </Button>
  );
});

ActionLink.propTypes = propTypes;

export default ActionLink;
