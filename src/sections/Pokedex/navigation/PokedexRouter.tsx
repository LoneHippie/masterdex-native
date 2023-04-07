import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PokedexStackParamList } from './types';
import PokedexSearchScreen from '../screens/PokdexSearchScreen/PokedexSearchScreen';
import SearchHeader from '../screens/PokdexSearchScreen/components/SearchHeader';

const PokedexRouter = () => {
   const Stack = createNativeStackNavigator<PokedexStackParamList>();
   return (
      <Stack.Navigator initialRouteName="PokedexSearchScreen">
         <Stack.Screen
            name="PokedexSearchScreen"
            component={PokedexSearchScreen}
            options={{ header: () => <SearchHeader /> }}
         />
      </Stack.Navigator>
   );
};

export default PokedexRouter;
