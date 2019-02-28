import React, {Context} from 'react';

type KeyDownEventContextType = {
  keyDownEvent: KeyboardEvent | null;
  tooltipVisibility: boolean;
};

export const KeyDownEventContext = React.createContext({
  keyDownEvent: null,
  tooltipVisibility: false
}) as Context<KeyDownEventContextType>;
