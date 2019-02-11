// @flow

import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getDisplayName } from './utils';
import { KeyDownEventContext } from '../../context/keyPress-context';

const withKeyboardTooltip = WrappedComponent => {
  // const FancyElement = (props, ref) {
  //   const fancyElement = useRef();
  //   useImperativeHandle(ref, () => ({
  //     click: () => {
  //       fancyElement.current.click();
  //     }
  //   })

  //   return <input ref={inputRef} ... />;
  // };
  // FancyElement = forwardRef(FancyElement);

  /* eslint-disable */
  const useMemoKeyboardTooltip = ({ titleText, keyPressEvent, placement, ...props }) => {
    const [visible, setVisible] = useState(false);
    const refElement = useRef();
    const keyDownContext = useContext(KeyDownEventContext);

    useEffect(() => {
      console.log(' >>>>> useMemoKeyboardTooltip ... init');

      if (keyDownContext.keyDownEvent && keyDownContext.keyDownEvent.ctrlKey) {
        setVisible(!visible);

        console.log(' >>>>> useMemoKeyboardTooltip ... refElement', refElement);
        console.log(
          ' >>>>> useMemoKeyboardTooltip ... keyDownContext.keyDownEvent',
          keyDownContext.keyDownEvent
        );

        switch (keyDownContext.keyDownEvent.keyCode) {
          case 77: // type "m" Main
          case 67: // type "c" Base
          case 66: // type "b" News
          case 89: // type "y" About
          case 76: // type "l" About
          case 27: // type "escape"
          case 88: // type "x" Escape
            // eslint-disable-next-line
            console.log(' >>>>> useMemoKeyboardTooltip ... props', props);
            if (
              props.to ||
              (refElement.current && refElement.current.props && refElement.current.props.to)
            ) {
              props.history.push(props.to || refElement.current.props.to);
            }

            setVisible(false);
            break;
          default:
          // setVisible(false);
        }
      }
    }, [keyDownContext.keyDownEvent]); // [keyPressEvent, refElement]

    return visible ? (
      <Tooltip title={titleText} visible={visible} placement={placement}>
        <WrappedComponent ref={refElement} {...props} />
      </Tooltip>
    ) : (
      <WrappedComponent ref={refElement} {...props} />
    );
  };

  useMemoKeyboardTooltip.displayName = `withKeyboardTooltip(${getDisplayName(WrappedComponent)})`;
  useMemoKeyboardTooltip.propTypes = {
    titleText: PropTypes.string.isRequired,
    keyPressEvent: PropTypes.element.isRequired,
    placement: PropTypes.string
  };
  useMemoKeyboardTooltip.defaultProps = {
    placement: 'bottom'
  };

  return useMemoKeyboardTooltip;
};

export default compose(
  connect(
    state => ({
      keyPressEvent: state.keyPress.value
    }),
    null
  ),
  withRouter,
  withKeyboardTooltip
);
