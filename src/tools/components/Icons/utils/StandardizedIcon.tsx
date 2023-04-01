import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SVG from 'react-native-svg';

interface Props {
   style?: StyleProp<ViewStyle>;
   children: React.ReactNode;
}

const StandardizedIcon = ({ style, children }: Props) => {
   return (
      <SVG
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         style={[style, { width: 24, height: 24 }]}
      >
         {children}
      </SVG>
   );
};

export default StandardizedIcon;
