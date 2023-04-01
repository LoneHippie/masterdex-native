import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { useTypeStyles } from '~app_contexts/theme/utils';
import { TypeString } from '~app_interfaces/TypeStrings';
import {
   IconBug,
   IconDark,
   IconDragon,
   IconElectric,
   IconFairy,
   IconFighting,
   IconFire,
   IconFlying,
   IconGhost,
   IconGrass,
   IconGround,
   IconIce,
   IconNormal,
   IconPoison,
   IconPsychic,
   IconRock,
   IconSteel,
   IconWater
} from './icons';
import { IconProps } from './types';

interface Props {
   type: TypeString;
   style?: StyleProp<ViewStyle>;
}

const TypeIcon = ({ type, style }: Props) => {
   const theme = useTheme();
   const { backgroundColor, color } = useTypeStyles(type);
   const styles = useStyles(theme);

   const Icon = useCallback(
      ({ style, iconColor }: IconProps) => {
         switch (type) {
            case 'bug':
               return <IconBug iconColor={iconColor} style={style} />;
            case 'dark':
               return <IconDark iconColor={iconColor} style={style} />;
            case 'dragon':
               return <IconDragon iconColor={iconColor} style={style} />;
            case 'electric':
               return <IconElectric iconColor={iconColor} style={style} />;
            case 'fairy':
               return <IconFairy iconColor={iconColor} style={style} />;
            case 'fighting':
               return <IconFighting iconColor={iconColor} style={style} />;
            case 'fire':
               return <IconFire iconColor={iconColor} style={style} />;
            case 'flying':
               return <IconFlying iconColor={iconColor} style={style} />;
            case 'ghost':
               return <IconGhost iconColor={iconColor} style={style} />;
            case 'grass':
               return <IconGrass iconColor={iconColor} style={style} />;
            case 'ground':
               return <IconGround iconColor={iconColor} style={style} />;
            case 'ice':
               return <IconIce iconColor={iconColor} style={style} />;
            case 'normal':
               return <IconNormal iconColor={iconColor} style={style} />;
            case 'poison':
               return <IconPoison iconColor={iconColor} style={style} />;
            case 'psychic':
               return <IconPsychic iconColor={iconColor} style={style} />;
            case 'rock':
               return <IconRock iconColor={iconColor} style={style} />;
            case 'steel':
               return <IconSteel iconColor={iconColor} style={style} />;
            case 'water':
               return <IconWater iconColor={iconColor} style={style} />;
         }
      },
      [type]
   );

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
