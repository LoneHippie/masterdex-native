import { getPokemonByName, getPokemonNames } from '~app_contexts/api/pokeapi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Layout from '~app_tools/components/Layout';
import { Pokemon } from '~app_interfaces/Pokemon';

const SearchScreen = () => {
   return (
      <Layout>
         <View>
            <Text>Search</Text>
            <ActivityIndicator color={'magenta'} />
         </View>
      </Layout>
   );
};

export default SearchScreen;
