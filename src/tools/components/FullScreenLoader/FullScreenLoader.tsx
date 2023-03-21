import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';

interface Props {
   isLoading: boolean;
}

const FullScreenLoader = ({ isLoading }: Props) => {
   const theme = useTheme();
   const styles = useStyles(theme);
   return isLoading ? (
      <View style={styles.container}>
         <ActivityIndicator size={'large'} color={theme.palette.focus} />
      </View>
   ) : (
      <></>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         flex: 1,
         width: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         color: theme.palette.common.white,
         opacity: 0.6
      }
   });

export default FullScreenLoader;
