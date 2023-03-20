import { getPokemonNames } from '~app_contexts/api/pokeapi';
import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

const SearchScreen = () => {
   useEffect(() => {
      getPokemonNames();
   }, []);
   return (
      <View>
         <Text>Search</Text>
      </View>
   );
};

export default SearchScreen;
