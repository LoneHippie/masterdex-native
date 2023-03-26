import React from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle, Button } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { useTypeStyles } from '~app_contexts/theme/utils';
import { Pokemon } from '~app_interfaces/Pokemon';
import TypeIcon from '~app_tools/components/Icons';
import PokemonSprite from '../PokemonSprite';

interface Props {
   pokemon: Pokemon;
   style?: StyleProp<ViewStyle>;
}

const PokemonRow = ({ pokemon, style }: Props) => {
   const theme = useTheme();
   const { backgroundColor, color } = useTypeStyles(pokemon.types[0].type.name);

   const styles = useStyles({ theme, backgroundColor, color });

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

interface StyleProps {
   theme: Theme;
   backgroundColor: string;
   color: string;
}

const useStyles = ({ theme, backgroundColor, color }: StyleProps) =>
   StyleSheet.create({
      container: {
         backgroundColor: backgroundColor,
         display: 'flex',
         flexDirection: 'row',
         alignSelf: 'stretch',
         borderRadius: 8,
         padding: 6
      },
      info: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-between',
         flex: 1
      },
      infoTop: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignSelf: 'stretch'
      },
      infoTopText: {
         display: 'flex',
         flexDirection: 'row'
      },
      infoTopTypes: {
         display: 'flex',
         flexDirection: 'row'
      },
      icon: {
         marginLeft: 4
      },
      infoBottom: {
         alignSelf: 'stretch'
      },
      bodyText: {
         color: color,
         fontSize: 14,
         letterSpacing: 0.5,
         lineHeight: 28
      },
      title: {
         textTransform: 'capitalize',
         marginLeft: 6
      },
      spriteContainer: {
         marginLeft: 12
      }
   });

export default PokemonRow;
