import React from 'react';
import { G, Path, Defs, Rect } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconDark = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <G clipPath="url(#clip0_1_11)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M11.064 18.9205C11.4059 18.9729 11.7562 19 12.1128 19C15.9097 19 18.9878 15.922 18.9878 12.125C18.9878 8.32804 15.9097 5.25 12.1128 5.25C11.8581 5.25 11.6065 5.26386 11.359 5.29086C13.2425 6.71781 14.4878 9.18968 14.4878 12C14.4878 14.9545 13.1114 17.535 11.064 18.9205ZM11.9878 21C16.9584 21 20.9878 16.9706 20.9878 12C20.9878 7.02943 16.9584 3 11.9878 3C7.01722 3 2.98779 7.02943 2.98779 12C2.98779 16.9706 7.01722 21 11.9878 21Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <clipPath id="clip0_1_11">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </clipPath>
         </Defs>
      </StandardizedIcon>
   );
};

export default IconDark;
