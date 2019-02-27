import React from 'react';

type KeyDownEventContextType = {
  keyDownEvent: KeyboardEvent | null;
  tooltipVisibility: boolean;
};

export const KeyDownEventContext = React.createContext({
  keyDownEvent: null,
  tooltipVisibility: null
}) as Context<KeyDownEventContextType>;
