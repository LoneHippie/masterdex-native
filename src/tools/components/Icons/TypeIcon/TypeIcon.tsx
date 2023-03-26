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
            return import('./Icons/IconBug');
         case 'dark':
            return import('./Icons/IconDark');
         case 'dragon':
            return import('./Icons/IconDragon');
         case 'electric':
            return import('./Icons/IconElectric');
         case 'fairy':
            return import('./Icons/IconFairy');
         case 'fighting':
            return import('./Icons/IconFighting');
         case 'fire':
            return import('./Icons/IconFire');
         case 'flying':
            return import('./Icons/IconFlying');
         case 'ghost':
            return import('./Icons/IconGhost');
         case 'grass':
            return import('./Icons/IconGrass');
         case 'ground':
            return import('./Icons/IconGround');
         case 'ice':
            return import('./Icons/IconIce');
         case 'normal':
            return import('./Icons/IconNormal');
         case 'poison':
            return import('./Icons/IconPoison');
         case 'psychic':
            return import('./Icons/IconPsychic');
         case 'rock':
            return import('./Icons/IconRock');
         case 'steel':
            return import('./Icons/IconSteel');
         case 'water':
            return import('./Icons/IconWater');
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
