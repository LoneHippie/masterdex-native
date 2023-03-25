import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import Layout from '~app_tools/components/Layout';
import useSearchScreen from './useSearchScreen';
import { StyleSheet } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { getIconsByType, useTypeStyles } from '~app_contexts/theme/utils';
import IconBug from '~app_tools/components/Icons/IconBug';

const SearchScreen = () => {
   const theme = useTheme();
   const styles = useStyles(theme);

   const { allPokemon } = useSearchScreen();

   return (
      <Layout>
         <FlatList
            data={allPokemon}
            renderItem={({ item }) => {
               const typeIcons = getIconsByType(item);
               return (
                  <View style={[styles.card, useTypeStyles(item.types[0].type.name)]}>
                     <View>
                        {typeIcons.map((typeIcon, index) => (
                           <IconBug key={index} />
                        ))}
                     </View>
                     <Image
                        style={styles.sprite}
                        source={{
                           uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`
                        }}
                     />
                     <Text style={useTypeStyles(item.types[0].type.name)}>{item.name}</Text>
                  </View>
               );
            }}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
         />
      </Layout>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      card: {
         flex: 1,
         display: 'flex',
         flexDirection: 'column',
         margin: 5
      },
      sprite: {
         height: 50,
         width: 50,
         marginBottom: 12
      }
   });

export default SearchScreen;
