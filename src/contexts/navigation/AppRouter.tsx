import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import PokemonRouter from '~app_sections/Pokemon/navigation/PokemonRouter';
import PokedexRouter from '~app_sections/Pokedex/navigation/PokedexRouter';

const AppRouter = () => {
   const Stack = createNativeStackNavigator<RootStackParamList>();
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="PokedexRouterStack">
            <Stack.Screen
               name="PokedexRouterStack"
               component={PokedexRouter}
               options={{ header: () => <></> }}
            />
            <Stack.Screen
               name="PokemonRouterStack"
               component={PokemonRouter}
               options={{ header: () => <></> }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default AppRouter;
