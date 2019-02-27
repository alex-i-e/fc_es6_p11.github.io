import React, { forwardRef, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button } from 'antd';
import withKeyboardTooltip from '../../HOC/withKeyboardTooltip';

export type ActionLinkProps = {
  urlState: string;
  children: React.ReactElement;
};

const NavLinkWithTooltip = withKeyboardTooltip(Link);
const ActionLink = forwardRef(({ onClick, urlState, children, titleText, ...props }: any, ref: Ref<Link>) => {
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

export default ActionLink;
