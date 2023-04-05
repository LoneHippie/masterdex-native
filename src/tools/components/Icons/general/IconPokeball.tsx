import React from 'react';
import { Path } from 'react-native-svg';
import { IconProps } from '../TypeIcon/types';
import useIconColor from '../TypeIcon/useIconColor';
import StandardizedIcon from '../utils/StandardizedIcon';

const IconPokeball = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            d="M19.4259 12.75H15.6379C15.2905 14.4617 13.7772 15.75 11.9629 15.75C10.1488 15.75 8.63543 14.4617 8.28798 12.75H4.5C4.87629 16.54 8.07396 19.5 11.9629 19.5C15.852 19.5 19.0496 16.54 19.4259 12.75Z"
            fill={fillColor}
         />
         <Path
            d="M19.4259 11.25C19.0496 7.46001 15.852 4.5 11.9629 4.5C8.07396 4.5 4.87629 7.46001 4.5 11.25H8.28798C8.63543 9.53832 10.1488 8.25 11.9629 8.25C13.7772 8.25 15.2905 9.53832 15.6379 11.25H19.4259Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9629 14.25C13.2056 14.25 14.2129 13.2427 14.2129 12C14.2129 10.7573 13.2056 9.75 11.9629 9.75C10.7203 9.75 9.71289 10.7573 9.71289 12C9.71289 13.2427 10.7203 14.25 11.9629 14.25ZM13.0879 12C13.0879 12.6213 12.5843 13.125 11.9629 13.125C11.3416 13.125 10.8379 12.6213 10.8379 12C10.8379 11.3787 11.3416 10.875 11.9629 10.875C12.5843 10.875 13.0879 11.3787 13.0879 12Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconPokeball;
