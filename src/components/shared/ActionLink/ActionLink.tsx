import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  Ref,
  RefAttributes
} from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button } from 'antd';
import withKeyboardTooltip from '../../HOC/withKeyboardTooltip';
import { AnchorButtonProps } from 'antd/lib/button/button';
import { ButtonProps } from 'antd/lib/button';

export type ActionLinkProps = {
  urlState: string;
  titleText?: string;
  children?: React.ReactElement | string;
};

const NavLinkWithTooltip: any = withKeyboardTooltip(Link);

/* : ForwardRefExoticComponent<
  PropsWithoutRef<LinkProps> & RefAttributes<Link & ActionLinkProps>
> */
const ActionLink = forwardRef(
  (
    { onClick, urlState, children, titleText, ...props }: any /* ActionLinkProps & ButtonProps */,
    ref: Ref<Link>
  ) => {
    // : RefForwardingComponent<Link, LinkProps>
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
  }
);

export default ActionLink;
