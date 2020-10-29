import React from 'react';
import { HashRouter } from 'react-router-dom';

import { MyApp } from './MyApp';
import { ThemeProvider } from '@ui5/webcomponents-react';

const App = () => (
  <HashRouter>
    <ThemeProvider>
      <MyApp/>
    </ThemeProvider>
  </HashRouter>
);

export default App;
