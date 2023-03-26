import React from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle, Button } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { useTypeStyles } from '~app_contexts/theme/utils';
import { Pokemon } from '~app_interfaces/Pokemon';
import TypeIcon from '~app_tools/components/Icons';
import PokemonSprite from '../PokemonSprite';
import useStylesPokemonRow from './useStylesPokemonRow';

interface Props {
   pokemon: Pokemon;
   style?: StyleProp<ViewStyle>;
}

const PokemonRow = ({ pokemon, style }: Props) => {
   const theme = useTheme();
   const { backgroundColor, color } = useTypeStyles(pokemon.types[0].type.name);

   const styles = useStylesPokemonRow({ theme, backgroundColor, color });

   return (
      <View style={[styles.container, style]}>
         <View style={styles.info}>
            <View style={styles.infoTop}>
               <View style={styles.infoTopText}>
                  <Text style={styles.bodyText}>#{pokemon.id}</Text>
                  <Text style={[styles.bodyText, styles.title]}>{pokemon.name}</Text>
               </View>
               <View style={styles.infoTopTypes}>
                  {pokemon.types.map((type, index) => (
                     <TypeIcon type={type.type.name} key={index} style={styles.icon} />
                  ))}
               </View>
            </View>
            <View style={styles.infoBottom}>
               <Button title="TEST BUTTON" />
            </View>
         </View>
         <PokemonSprite style={styles.spriteContainer} pokemonId={pokemon.id} />
      </View>
   );
};

export default PokemonRow;
