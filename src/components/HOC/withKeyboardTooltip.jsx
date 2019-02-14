// @flow

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getDisplayName } from './utils';
import { KeyDownEventContext } from '../../context/keyPress-context';

const withKeyboardTooltip = WrappedComponent => {
  const useKeyboardTooltip = ({ titleText, placement, staticContext, dispatch, ...props }) => {
    const [visible, setVisible] = useState(false);
    const { keyDownEvent, tooltipVisibility } = useContext(KeyDownEventContext);

    useEffect(() => {
      if (keyDownEvent && keyDownEvent.ctrlKey) {
        const [, keySymbol] = titleText.split(' + ').map(item => item.toLowerCase());

        if (keyDownEvent.key.toLowerCase() === keySymbol && props.to) {
          props.history.push(props.to);
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
