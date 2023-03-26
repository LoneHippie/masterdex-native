import React, { useMemo } from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
   pokemonId: number;
   size?: number;
   style?: StyleProp<ViewStyle>;
}

const PokemonSprite = ({ pokemonId, size, style }: Props) => {
   const spriteSize = useMemo(() => (size ? size : 80), [size]);
   const styles = useStyles({ size: spriteSize });
   return (
      <View style={[style, styles.container]}>
         <Image
            style={styles.sprite}
            source={{
               uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
            }}
         />
      </View>
   );
};

interface StyleProps {
   size: number;
}

const useStyles = ({ size }: StyleProps) =>
   StyleSheet.create({
      container: {
         height: size,
         width: size
      },
      sprite: {
         height: size,
         width: size
      }
   });

export default PokemonSprite;
