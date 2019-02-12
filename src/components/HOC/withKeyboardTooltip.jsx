// @flow

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getDisplayName } from './utils';
import { KeyDownEventContext } from '../../context/keyPress-context';

const KeyMapper = {
  m: 77, // Main Info => Ctrl + M: keyCode: 77
  b: 66, // Base => Ctrl + B: keyCode: 66
  i: 73, // Info => Ctrl + I: keyCode: 73
  y: 89, // News => Ctrl + Y: keyCode: 89
  esc: 27, // type "escape"
  q: 81, // Create Record => Ctrl + Q: keyCode: 81
  x: 88 // Back => Ctrl + x: keyCode: 88
};

const withKeyboardTooltip = WrappedComponent => {
  const useKeyboardTooltip = ({ titleText, placement, ...props }) => {
    const [visible, setVisible] = useState(false);
    const { keyDownEvent, tooltipVisibility } = useContext(KeyDownEventContext);
    // keyDownContext

    useEffect(() => {
      if (keyDownEvent && keyDownEvent.ctrlKey) {
        const [, keySymbol] = titleText.split(' + ').map(item => item.toLowerCase());

        if (KeyMapper[keySymbol] && KeyMapper[keySymbol] === keyDownEvent.keyCode && props.to) {
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
