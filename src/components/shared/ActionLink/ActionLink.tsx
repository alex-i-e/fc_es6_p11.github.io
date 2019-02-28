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

export type ActionLinkProps = {
  urlState: string;
  children: React.ReactElement;
};

const NavLinkWithTooltip: any = withKeyboardTooltip(Link);

const ActionLink: ForwardRefExoticComponent<
  PropsWithoutRef<LinkProps> & RefAttributes<Link>
> = forwardRef(
  ({ onClick, urlState, children, titleText, ...props }: any, ref: Ref<Link>): any => {
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
