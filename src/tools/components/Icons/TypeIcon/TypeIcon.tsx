import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { useTypeStyles } from '~app_contexts/theme/utils';
import { TypeString } from '~app_interfaces/TypeStrings';

interface Props {
   type: TypeString;
   style?: StyleProp<ViewStyle>;
}

const TypeIcon = ({ type, style }: Props) => {
   const theme = useTheme();
   const { backgroundColor, color } = useTypeStyles(type);
   const styles = useStyles(theme);

   const Icon = React.lazy(() => {
      switch (type) {
         case 'bug':
            return import('./icons/IconBug');
         case 'dark':
            return import('./icons/IconDark');
         case 'dragon':
            return import('./icons/IconDragon');
         case 'electric':
            return import('./icons/IconElectric');
         case 'fairy':
            return import('./icons/IconFairy');
         case 'fighting':
            return import('./icons/IconFighting');
         case 'fire':
            return import('./icons/IconFire');
         case 'flying':
            return import('./icons/IconFlying');
         case 'ghost':
            return import('./icons/IconGhost');
         case 'grass':
            return import('./icons/IconGrass');
         case 'ground':
            return import('./icons/IconGround');
         case 'ice':
            return import('./icons/IconIce');
         case 'normal':
            return import('./icons/IconNormal');
         case 'poison':
            return import('./icons/IconPoison');
         case 'psychic':
            return import('./icons/IconPsychic');
         case 'rock':
            return import('./icons/IconRock');
         case 'steel':
            return import('./icons/IconSteel');
         case 'water':
            return import('./icons/IconWater');
      }
   });

   return (
      <View style={[style, styles.container, { backgroundColor: color }]}>
         <Icon iconColor={backgroundColor} />
      </View>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         borderRadius: 200,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         padding: 6,
         height: 30,
         width: 30
      }
   });

export default TypeIcon;
