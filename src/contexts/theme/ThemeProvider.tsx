import React, { createContext } from 'react';
import { useContext } from 'react';
import { theme } from './theme';

const ThemeContext = createContext<typeof theme>(theme);

interface ProviderProps {
   children: React.ReactNode;
}

const ThemeProvider = ({ children }: ProviderProps) => {
   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};

const useThemedStyles = (styles: any) => {
   const theme = useTheme();
   return styles(theme);
};

export { ThemeProvider, useTheme, useThemedStyles };
