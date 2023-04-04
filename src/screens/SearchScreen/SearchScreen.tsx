import React from 'react';
import { FlatList } from 'react-native';
import StandardLayout from '~app_tools/components/layouts/StandardLayout';
import useSearchScreen from './useSearchScreen';
import { StyleSheet } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { PokemonRow } from '~app_tools/components/pokemon_components';

const SearchScreen = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   const { filteredPokemon } = useSearchScreen();

   return (
      <StandardLayout>
         <FlatList
            data={filteredPokemon}
            renderItem={({ item }) => <PokemonRow pokemon={item} style={styles.row} />}
            keyExtractor={(item) => item.id.toString()}
         />
      </StandardLayout>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      row: {
         marginBottom: 8
      }
   });

export default SearchScreen;
