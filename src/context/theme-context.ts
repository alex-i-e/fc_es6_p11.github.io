import React from 'react';

export const themes: { [key in string]: {foreground: string, background: string}} = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  },
  red: {
    foreground: '#ffffff',
    background: '#f3d1d1'
  },
  green: {
    foreground: '#ffffff',
    background: '#a4dca7'
  },
  blue: {
    foreground: '#ffffff',
    background: '#cccaf2'
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: (color: string) => {}
});
