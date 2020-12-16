import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
export default App;
