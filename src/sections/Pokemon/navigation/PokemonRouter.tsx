import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PokemonOverviewScreen from '../screens/PokemonOverviewScreen';
import { PokemonStackParamList } from './types';

interface Props {
   route: NativeStackScreenProps<PokemonStackParamList, 'PokemonRouterStack'>['route'];
}

const PokemonRouter = ({ route }: Props) => {
   const {
      params: { pokemon }
   } = route;

   const Tab = createBottomTabNavigator<PokemonStackParamList>();

   return (
      <Tab.Navigator initialRouteName="PokemonOverviewScreen">
         <Tab.Screen
            name="PokemonOverviewScreen"
            component={PokemonOverviewScreen}
            initialParams={{ pokemon: pokemon }}
         />
      </Tab.Navigator>
   );
};

export default PokemonRouter;
