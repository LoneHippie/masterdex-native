import React from 'react';
import { FlatList } from 'react-native';
import StandardLayout from '~app_tools/components/layouts/StandardLayout';
import { StyleSheet } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { PokemonRow } from '~app_tools/components/pokemon_components';
import SearchModal from './components/SearchModal';
import usePokedexSearchScreen from './usePokedexSearchScreen';

const PokedexSearchScreen = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   const { filteredPokemon, handleSubmitPokemonSearch } = usePokedexSearchScreen();

   return (
      <StandardLayout>
         <FlatList
            style={styles.pokemonRows}
            data={filteredPokemon}
            renderItem={({ item }) => <PokemonRow pokemon={item} style={styles.row} />}
            keyExtractor={(item) => item.id.toString()}
         />
         <SearchModal onSubmitSearch={handleSubmitPokemonSearch} />
      </StandardLayout>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      row: {
         marginBottom: 8
      },
      pokemonRows: {
         marginTop: 8
      }
   });

export default PokedexSearchScreen;
