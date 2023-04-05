import React, { useMemo } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';

interface Props {
   color?: string;
   style?: StyleProp<ViewStyle>;
   text: string;
   onPress: () => void;
}

const StrokeButton = ({ color, style, text, onPress }: Props) => {
   const theme = useTheme();
   const buttonColor = useMemo(() => (color ? color : theme.palette.secondary.main), [color]);

   const styles = useStyles({ theme: theme, color: buttonColor });

   return (
      <Pressable style={[style, styles.container]} onPress={onPress}>
         <Text style={styles.text}>{text}</Text>
      </Pressable>
   );
};

interface StyleProps {
   theme: Theme;
   color: string;
}

const useStyles = ({ theme, color }: StyleProps) =>
   StyleSheet.create({
      container: {
         borderRadius: 4,
         borderWidth: 1,
         borderColor: color,
         paddingTop: 4,
         paddingBottom: 4,
         paddingLeft: 12,
         paddingRight: 12,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         alignSelf: 'flex-start'
      },
      text: {
         fontSize: 14,
         color: color
      }
   });

export default StrokeButton;
