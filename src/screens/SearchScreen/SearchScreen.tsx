import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import Layout from '~app_tools/components/Layout';
import useSearchScreen from './useSearchScreen';
import { StyleSheet } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { PokemonRow } from '~app_tools/components/PokemonComponents';

const SearchScreen = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   const { allPokemon } = useSearchScreen();

   return (
      <Layout>
         <FlatList
            data={allPokemon}
            renderItem={({ item }) => <PokemonRow pokemon={item} style={styles.row} />}
            keyExtractor={(item) => item.id.toString()}
         />
      </Layout>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      row: {
         marginBottom: 8
      }
   });

export default SearchScreen;
