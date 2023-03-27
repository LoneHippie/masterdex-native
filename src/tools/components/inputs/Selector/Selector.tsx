import React, { useCallback, useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, View, Text } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import StrokeButton from '~app_tools/components/buttons/StrokeButton';
import BaseDialog from '~app_tools/components/dialogs/BaseDialog';
import useFlag from '~app_tools/utils/useFlag';

interface Props {
   options: Record<string, string>[];
   onChangeValue: (value: string) => void;
   defaultText: string;
}

const Selector = ({ options, onChangeValue, defaultText }: Props) => {
   const theme = useTheme();
   const [isOpenDialog, setTrueIsOpenDialog, setFalseIsOpenDialog] = useFlag();
   const [selectorText, setSelectorText] = useState(defaultText);

   const handleOnChangeValue = useCallback((value: string) => {
      setSelectorText(value);
      onChangeValue(value);
      setFalseIsOpenDialog();
   }, []);

   const styles = useStyles(theme);

   return (
      <>
         <StrokeButton text={selectorText} onPress={setTrueIsOpenDialog} />

         <BaseDialog isOpen={isOpenDialog} onClose={setFalseIsOpenDialog}>
            {options.map(({ key, value }, index) => (
               <Pressable key={`${key}__${index}`} onPress={() => handleOnChangeValue(value)}>
                  <Text>{key}</Text>
               </Pressable>
            ))}
         </BaseDialog>
      </>
   );
};

const useStyles = (theme: Theme) => StyleSheet.create({});

export default Selector;
