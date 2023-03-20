import { getPokemonNames } from '~app_contexts/api/pokeapi';
import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Layout from '~app_tools/components/Layout';

const SearchScreen = () => {
   useEffect(() => {
      getPokemonNames();
   }, []);
   return (
      <Layout>
         <View>
            <Text>Search</Text>
         </View>
      </Layout>
   );
};

export default SearchScreen;
