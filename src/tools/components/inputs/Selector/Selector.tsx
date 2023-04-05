import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import StrokeButton from '~app_tools/components/buttons/StrokeButton';
import BaseDialog from '~app_tools/components/dialogs/BaseDialog';
import useFlag from '~app_tools/utils/useFlag';

interface SelectOption<T> {
   key: string;
   value: T;
}

interface Props<T> {
   options: SelectOption<T>[];
   selectedValue: T;
   onChangeValue: (value: T) => void;
   defaultText: string;
   style?: StyleProp<ViewStyle>;
}

function Selector<T>({ options, selectedValue, onChangeValue, defaultText, style }: Props<T>) {
   const theme = useTheme();
   const styles = useStyles(theme);

   const [isOpenDialog, setTrueIsOpenDialog, setFalseIsOpenDialog] = useFlag();
   const [selectorText, setSelectorText] = useState(defaultText);

   const handleOnChangeValue = useCallback((key: string, value: T) => {
      setSelectorText(value ? key : defaultText);
      onChangeValue(value);
      setFalseIsOpenDialog();
   }, []);

   const isSelectedValue = (value: T, selectedValue: T): StyleProp<TextStyle> =>
      value === selectedValue && {
         backgroundColor: theme.palette.contrasts.dark,
         color: theme.palette.contrasts.light
      };

   useEffect(() => {
      if (!selectedValue) {
         setSelectorText(defaultText);
      }
   }, [selectedValue]);

   return (
      <>
         <StrokeButton
            color={theme.palette.secondary.main}
            text={selectorText}
            onPress={setTrueIsOpenDialog}
            style={style}
         />

         <BaseDialog isOpen={isOpenDialog} onClose={setFalseIsOpenDialog}>
            <View style={styles.container}>
               {options.map(({ key, value }, index) => (
                  <Pressable
                     style={styles.option}
                     key={`${key}__${index}`}
                     onPress={() => handleOnChangeValue(key, value)}
                  >
                     <Text style={[styles.optionText, isSelectedValue(value, selectedValue)]}>
                        {key}
                     </Text>
                  </Pressable>
               ))}
            </View>
         </BaseDialog>
      </>
   );
}

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         padding: 12
      },
      option: {
         marginBottom: 1
      },
      optionText: {
         color: theme.palette.secondary.main,
         fontSize: 14,
         fontWeight: '700',
         padding: 3
      }
   });

export default Selector;
