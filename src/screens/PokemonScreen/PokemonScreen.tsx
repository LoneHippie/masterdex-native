import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import StandardLayout from '~app_tools/components/layouts/StandardLayout';

const PokemonScreen = () => {
   return (
      <StandardLayout>
         <View>
            <Text style={styles.container}>Pokemon screen</Text>
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

export default PokemonScreen;
