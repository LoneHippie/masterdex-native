import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import Layout from '~app_tools/components/Layout';

const PokemonScreen = () => {
   return (
      <Layout>
         <View>
            <Text style={styles.container}>Pokemon screen</Text>
         </View>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingLeft: 2,
      paddingRight: 2
   }
});

export default PokemonScreen;
