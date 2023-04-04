import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
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
   onChangeValue: (value: T) => void;
   defaultText: string;
}

function Selector<T>({ options, onChangeValue, defaultText }: Props<T>) {
   const theme = useTheme();
   const [isOpenDialog, setTrueIsOpenDialog, setFalseIsOpenDialog] = useFlag();
   const [selectorText, setSelectorText] = useState(defaultText);

   const handleOnChangeValue = useCallback((key: string, value: T) => {
      setSelectorText(value ? key : defaultText);
      onChangeValue(value);
      setFalseIsOpenDialog();
   }, []);

   const styles = useStyles(theme);

   return (
      <>
         <StrokeButton text={selectorText} onPress={setTrueIsOpenDialog} />

         <BaseDialog isOpen={isOpenDialog} onClose={setFalseIsOpenDialog}>
            {options.map(({ key, value }, index) => (
               <Pressable key={`${key}__${index}`} onPress={() => handleOnChangeValue(key, value)}>
                  <Text>{key}</Text>
               </Pressable>
            ))}
         </BaseDialog>
      </>
   );
}

const useStyles = (theme: Theme) => StyleSheet.create({});

export default Selector;
