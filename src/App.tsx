import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DemoLink } from './demo/demo-link/DemoLink';
import { StButton } from './demo/styled/StButton';
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
    console.log(themeMode);
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
        <div>
          <DemoLink color="red" size="medium" onClick={() => console.log('clicked')} />
          <button onClick={handler}>Text</button>
          <StButton>Text </StButton>
        </div>
      </div>
    </ThemeProvider>
  );
};
