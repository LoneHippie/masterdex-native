import React from 'react';
import Apploader from '~app_contexts/loader/Apploader';
import AppRouter from '~app_contexts/navigation/AppRouter';
import { ThemeProvider } from '~app_contexts/theme/ThemeProvider';

const App = () => {
   return (
      <ThemeProvider>
         <AppRouter />
         <Apploader />
      </ThemeProvider>
   );
};

export default App;
