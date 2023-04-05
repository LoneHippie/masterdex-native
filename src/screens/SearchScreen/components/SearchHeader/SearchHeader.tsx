import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import Selector from '~app_tools/components/inputs/Selector';
import useSearchHeader from './useSearchHeader';

const SearchHeader = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   StatusBar.setBackgroundColor(theme.palette.common.white);
   StatusBar.setBarStyle('dark-content');

   const { handleChangeGen, handleChangeType, genOptions, typeOptions, selectedGen, selectedType } =
      useSearchHeader();

   return (
      <View style={styles.container}>
         <View style={styles.contentTop}>
            <Text style={styles.title}>Pokedex</Text>
            <Text>2023</Text>
         </View>
         <View style={styles.contentBottom}>
            <Selector
               defaultText={'Select Gen'}
               selectedValue={selectedGen}
               onChangeValue={handleChangeGen}
               options={genOptions}
            />
            <Selector
               defaultText={'Select Type'}
               selectedValue={selectedType}
               onChangeValue={handleChangeType}
               options={typeOptions}
            />
         </View>
      </View>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         alignSelf: 'stretch',
         width: '100%',
         backgroundColor: theme.palette.common.white,
         paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 10,
         paddingLeft: 16,
         paddingRight: 16,
         paddingBottom: 5,
         display: 'flex',
         flexDirection: 'column'
      },
      contentTop: {
         display: 'flex',
         flexDirection: 'row',
         alignSelf: 'stretch',
         justifyContent: 'space-between',
         marginBottom: 10
      },
      title: {
         fontSize: 16,
         color: theme.palette.secondary.main
      },
      contentBottom: {
         display: 'flex',
         flexDirection: 'row',
         alignSelf: 'stretch'
      }
   });

export default SearchHeader;
