import React, { useCallback } from 'react';
import { Image, StyleProp, Text, View, ViewStyle, Button, TouchableOpacity } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { useTypeStyles } from '~app_contexts/theme/utils';
import { Pokemon } from '~app_interfaces/Pokemon';
import StrokeButton from '~app_tools/components/buttons/StrokeButton';
import TypeIcon from '~app_tools/components/icons';
import { IconPokeballLarge } from '~app_tools/components/icons/general';
import PokemonSprite from '../PokemonSprite';
import useStylesPokemonRow from './useStylesPokemonRow';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, ScreenNavigationProps } from '~app_contexts/navigation/types';

interface Props {
   pokemon: Pokemon;
   style?: StyleProp<ViewStyle>;
}

const PokemonRow = ({ pokemon, style }: Props) => {
   const theme = useTheme();
   const { backgroundColor, color } = useTypeStyles(pokemon.types[0].type.name);
   const styles = useStylesPokemonRow({ theme, backgroundColor, color });

   const navigation = useNavigation<ScreenNavigationProps>();

   const handleNavigation = useCallback(() => {
      navigation.navigate('PokemonRouterStack', { pokemon: pokemon });
   }, [navigation]);

   return (
      <TouchableOpacity onPress={handleNavigation} style={[styles.container, style]}>
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
               <StrokeButton color={color} text={'Add to team'} onPress={() => ''} />
               <TouchableOpacity style={styles.addCatchListButton}>
                  <IconPokeballLarge
                     iconColor={
                        color === theme.palette.contrasts.dark
                           ? theme.palette.common.white
                           : theme.palette.contrasts.dark
                     }
                  />
               </TouchableOpacity>
            </View>
         </View>
         <PokemonSprite style={styles.spriteContainer} pokemonId={pokemon.id} />
      </TouchableOpacity>
   );
};

export default PokemonRow;
