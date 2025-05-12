import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1976d2',
    accent: '#03dac4',
    background: '#fff',
    surface: '#fff',
    text: '#222',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#90caf9',
    accent: '#03dac4',
    background: '#121212',
    surface: '#222',
    text: '#fff',
  },
}; 