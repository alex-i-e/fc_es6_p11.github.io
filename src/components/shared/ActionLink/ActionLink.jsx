import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import withKeyboardTooltip from '../../HOC/withKeyboardTooltip';

const propTypes = {
  urlState: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
const NavLinkWithTooltip = withKeyboardTooltip(Link);
const ActionLink = forwardRef(({ onClick, urlState, children, titleText, ...props }, ref) => {
  return (
    <Button onClick={onClick} {...props}>
      {!titleText ? (
        <Link to={urlState} ref={ref}>
          {children}
        </Link>
      ) : (
        <NavLinkWithTooltip to={urlState} ref={ref} titleText={titleText}>
          {children}
        </NavLinkWithTooltip>
      )}
    </Button>
  );
});

ActionLink.propTypes = propTypes;

export default ActionLink;
