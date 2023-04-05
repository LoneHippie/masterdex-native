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
      <Modal style={styles.dialog} transparent={true} visible={isOpen} onRequestClose={onClose}>
         <Pressable style={styles.container} onPress={onClose} />
         <View style={styles.content}>{children}</View>
      </Modal>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      dialog: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
      },
      container: {
         flex: 1,
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         position: 'absolute',
         top: '30%',
         alignSelf: 'center',
         width: '60%',
         backgroundColor: theme.palette.common.white,
         borderRadius: 6,
         zIndex: 50000
      }
   });

export default BaseDialog;
