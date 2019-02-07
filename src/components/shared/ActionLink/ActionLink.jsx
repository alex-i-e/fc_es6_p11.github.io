import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const propTypes = {
  urlState: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const ActionLink = ({ onClick, urlState, children, ...props }) => {
  return (
    <Button {...props} onClick={onClick}>
      <Link to={urlState}>{children}</Link>
    </Button>
  );
};

ActionLink.propTypes = propTypes;

export default ActionLink;
