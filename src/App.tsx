import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DemoLink } from './demo/demo-link/DemoLink';
import { StButton } from './demo/styled/StButton';
import { Box } from './demo/styled/Box';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { setThemeMode } from './redux/main/main-data.slice';
import { darkTheme, lightTheme } from './styles/theme/nicode-theme';

export const App = () => {
  // Data
  const variable = useAppSelector((state) => state.mainData.dummyVariable);
  const themeMode = useAppSelector((state) => state.mainData.themeMode);

  // Hooks
  const dispatch = useAppDispatch();

  const handler = () => {
    if (themeMode === 'dark') {
      dispatch(setThemeMode('light'));
    }
    if (themeMode === 'light') {
      dispatch(setThemeMode('dark'));
    }
  };

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <div className="App">
        <header className="App-header">
          <h1>Once Upon A Site</h1>
        </header>
        <p>{variable ? 'TRUE' : 'FALSE'}</p>
        <Box
          bg={[
            'red.500',
            'green.300',
            'blue.300',
            'amber.400',
            'purple.400',
            'red.500',
            'green.300',
            'blue.300',
            'amber.400',
            'purple.400',
          ]}
          m={[10, 15, 25, 50, 60]}
          width={[1, 1 / 2, 1 / 4, 1 / 8, 1 / 16]}
        >
          <DemoLink color="red" size="medium" onClick={() => console.log('clicked')} />
          <button onClick={handler}>Text</button>
          <StButton bg="custom.blue" color="custom.white">
            Text{' '}
          </StButton>
        </Box>
      </div>
    </ThemeProvider>
  );
};
