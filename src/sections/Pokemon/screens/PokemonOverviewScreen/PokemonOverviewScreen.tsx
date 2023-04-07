import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { PokemonStackParamList } from '~app_sections/Pokemon/navigation/types';
import StandardLayout from '~app_tools/components/layouts/StandardLayout';

interface Props {
   route: NativeStackScreenProps<PokemonStackParamList, 'PokemonOverviewScreen'>['route'];
}

const PokemonOverviewScreen = ({ route }: Props) => {
   const {
      params: { pokemon }
   } = route;

   return (
      <StandardLayout>
         <View>
            <Text style={styles.container}>{pokemon.name}</Text>
         </View>
      </StandardLayout>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingLeft: 2,
      paddingRight: 2
   }
});

export default PokemonOverviewScreen;
