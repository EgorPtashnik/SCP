import React from 'react';

import { MyApp } from './MyApp';
import { ThemeProvider } from '@ui5/webcomponents-react';

const App = () => (
  <ThemeProvider>
    <MyApp/>
  </ThemeProvider>
);

export default App;
