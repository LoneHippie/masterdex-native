import React from 'react';
import AppRouter from '~app_contexts/navigation/AppRouter';
import { ThemeProvider } from '~app_contexts/theme/ThemeProvider';

const App = () => {
   return (
      <ThemeProvider>
         <AppRouter />
      </ThemeProvider>
   );
};

export default App;
