import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import Selector from '~app_tools/components/inputs/Selector';

const SearchHeader = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   StatusBar.setBackgroundColor(theme.palette.common.white);
   StatusBar.setBarStyle('dark-content');

   const options = [
      { key: 'Gen 1', value: 'gen 1' },
      { key: 'Gen 2', value: 'gen 2' },
      { key: 'Gen 3', value: 'gen 3' }
   ];

   return (
      <View style={styles.container}>
         <Text>TEST</Text>
         <Selector
            defaultText="SELECT ME"
            onChangeValue={(value) => alert(value)}
            options={options}
         />
      </View>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         alignSelf: 'stretch',
         width: '100%',
         backgroundColor: theme.palette.common.white,
         paddingTop: StatusBar.currentHeight,
         paddingLeft: 16,
         paddingRight: 16,
         paddingBottom: 5,
         display: 'flex',
         flexDirection: 'column'
      },
      content: {
         flex: 1,
         width: '100%'
      }
   });

export default SearchHeader;
