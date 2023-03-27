import React from 'react';
import { Modal, Pressable, View, StyleSheet } from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';

interface Props {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

const BaseDialog = ({ isOpen, onClose, children }: Props) => {
   const theme = useTheme();
   const styles = useStyles(theme);

   return (
      <Modal transparent={true} visible={isOpen} onRequestClose={onClose}>
         <Pressable style={styles.container} onPress={onClose}>
            <View style={styles.content}>{children}</View>
         </Pressable>
      </Modal>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         width: '60%',
         backgroundColor: theme.palette.common.white,
         zIndex: 50000
      }
   });

export default BaseDialog;
