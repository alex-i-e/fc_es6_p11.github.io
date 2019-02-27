/* tslint:disable  */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { LinkProps } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { getDisplayName } from './utils';
import { KeyDownEventContext } from '../../context/keyPress-context';
import { TooltipPlacement } from 'antd/es/tooltip';

type WithKeyboardTooltipType = {
  titleText: string;
  placement: TooltipPlacement;
};

type WithKeyboardAndRouterType = RouteComponentProps<any> & WithKeyboardTooltipType & LinkProps;

const withKeyboardTooltip = <BaseProps extends WithKeyboardAndRouterType>(
  WrappedComponent: React.ComponentType<any>
) => {
  const useKeyboardTooltip = ({ titleText, placement, ...props }: BaseProps) => {
    const [visible, setVisible] = useState(false);
    const { keyDownEvent, tooltipVisibility } = useContext(KeyDownEventContext);

    useEffect(() => {
      if (keyDownEvent && keyDownEvent.ctrlKey) {
        const [, keySymbol] = titleText.split(' + ').map((item: string) => item.toLowerCase());

        if (keyDownEvent.key.toLowerCase() === keySymbol && props.to) {
          props.history.push(props.to as string);
        }
      }

      setVisible(tooltipVisibility);
    }, [keyDownEvent]);

    return visible ? (
      <Tooltip title={titleText} visible={visible} placement={placement}>
        <WrappedComponent {...props} />
      </Tooltip>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  useKeyboardTooltip.displayName = `withKeyboardTooltip(${getDisplayName(WrappedComponent)})`;
  useKeyboardTooltip.propTypes = {
    titleText: PropTypes.string.isRequired,
    placement: PropTypes.string
  };
  useKeyboardTooltip.defaultProps = {
    placement: 'bottom'
  };

  return useKeyboardTooltip;
};

export default compose(
  connect(
    null,
    null
  ),
  withRouter,
  withKeyboardTooltip
);
