import React from 'react';
import PokemonScreen from '~app_screens/PokemonScreen';
import SearchScreen from '~app_screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

const AppRouter = () => {
   const Stack = createNativeStackNavigator<RootStackParamList>();
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default AppRouter;
