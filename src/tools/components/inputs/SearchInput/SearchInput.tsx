import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
   NativeSyntheticEvent,
   StyleProp,
   StyleSheet,
   TextInput,
   TextInputSubmitEditingEventData,
   TouchableOpacity,
   View,
   ViewStyle
} from 'react-native';
import { Theme } from '~app_contexts/theme/theme';
import { useTheme } from '~app_contexts/theme/ThemeProvider';
import { IconSearch } from '~app_tools/components/icons/general';

interface Props {
   value: string;
   onChange: Dispatch<SetStateAction<string>>;
   onSubmit: (value: string) => void;
   style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ value, onChange, onSubmit, style }: Props) => {
   const theme = useTheme();
   const styles = useStyles(theme);

   const handleSubmit = useCallback(
      (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
         onSubmit(event.nativeEvent.text);
      },
      []
   );

   const handleClickSubmit = useCallback(() => {
      onSubmit(value);
   }, [value]);

   return (
      <View style={[style, styles.container]}>
         <TouchableOpacity style={styles.icon} onPress={handleClickSubmit}>
            <IconSearch iconColor={theme.palette.secondary.main} />
         </TouchableOpacity>
         <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={handleSubmit}
            autoFocus
            blurOnSubmit
         />
      </View>
   );
};

const useStyles = (theme: Theme) =>
   StyleSheet.create({
      container: {
         display: 'flex',
         flexDirection: 'row',
         paddingLeft: 6,
         borderRadius: 8,
         borderColor: theme.palette.secondary.main,
         overflow: 'hidden'
      },
      icon: {
         marginRight: 6,
         padding: 4
      },
      input: {
         flex: 1,
         color: theme.palette.secondary.main,
         fontSize: 16,
         padding: 6,
         borderTopRightRadius: 8,
         borderBottomRightRadius: 8
      }
   });

export default SearchInput;
