import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';

interface Props {
   children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
   const theme = useTheme();
   const styles = useStyles(theme);

   return (
      <SafeAreaProvider>
         <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         flex: 1,
         paddingLeft: 20,
         paddingRight: 20,
         backgroundColor: theme.palette.types.dragon
      }
   });

export default Layout;
