// @flow

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getDisplayName } from './utils';

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

  const useMemoKeyboardTooltip = ({ titleText, keyPressEvent, placement = 'bottom', ...props }) => {
    const [visible, setVisible] = useState(false);
    const refElement = useRef();

    useEffect(() => {
      if (keyPressEvent.ctrlKey) {
        // eslint-disable-next-line
        console.log(' ...withKeyboardTooltip => useEffect => Ctrl');
        setVisible(!visible);

        switch (keyPressEvent.keyCode) {
          case 67: // type "c"
            // eslint-disable-next-line
            console.log(' >>>>> ', refElement);
            console.log(' >>>>> ', props);
            if (refElement.current.props.to) {
              props.history.push(refElement.current.props.to);
            }

            // refElement.current.click();

            setVisible(false);
            break;
          default:
        }
      }
    }, [keyPressEvent, refElement]);

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
    placement: PropTypes.string.isRequired
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
