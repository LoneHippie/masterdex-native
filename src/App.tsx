import React from 'react';
import { Provider } from 'react-redux';
import Apploader from '~app_contexts/loader/Apploader';
import AppRouter from '~app_contexts/navigation/AppRouter';
import { store } from '~app_contexts/state/redux/store';
import { ThemeProvider } from '~app_contexts/theme/ThemeProvider';

const App = () => {
   return (
      <Provider store={store}>
         <ThemeProvider>
            <AppRouter />
            <Apploader />
         </ThemeProvider>
      </Provider>
   );
};

export default App;
