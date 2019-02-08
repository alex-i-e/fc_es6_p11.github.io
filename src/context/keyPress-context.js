import React from 'react';

export const KeyDownEventContext = React.createContext({
  keyDownEvent: null,
  changeKeyDownEvent: () => {}
});
