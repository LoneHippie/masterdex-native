import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import BaseDialog from '~app_tools/components/dialogs/BaseDialog';
import { IconSearch } from '~app_tools/components/icons/general';
import SearchInput from '~app_tools/components/inputs/SearchInput';
import useFlag from '~app_tools/utils/useFlag';

interface Props {
   onSubmitSearch: (value: string) => void;
}

const SearchModal = ({ onSubmitSearch }: Props) => {
   const theme = useTheme();
   const styles = useStyles(theme);
   const [isOpenDialog, setTrueIsOpenDialog, setFalseIsOpenDialog] = useFlag();

   const [text, setText] = useState('');

   const handleSubmitSearch = useCallback(
      (value: string) => {
         onSubmitSearch(value);
         setFalseIsOpenDialog();
      },
      [setFalseIsOpenDialog]
   );

   return (
      <>
         <TouchableOpacity style={styles.button} onPress={setTrueIsOpenDialog}>
            <IconSearch iconColor={theme.palette.common.white} />
         </TouchableOpacity>
         <BaseDialog isOpen={isOpenDialog} onClose={setFalseIsOpenDialog}>
            <SearchInput value={text} onChange={setText} onSubmit={handleSubmitSearch} />
         </BaseDialog>
      </>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      button: {
         position: 'absolute',
         bottom: 18,
         right: 10,
         borderRadius: 200,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         width: 38,
         height: 38,
         backgroundColor: theme.palette.secondary.main
      }
   });

export default SearchModal;
