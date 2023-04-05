import React from 'react';
import SVG, { Path } from 'react-native-svg';
import { IconProps } from '../TypeIcon/types';
import useIconColor from '../TypeIcon/useIconColor';

const IconPokeballLarge = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });

   return (
      <SVG width="32" height="32" viewBox="0 0 32 32" fill="none" style={style}>
         <Path
            d="M27.5513 17.1666H21.659C21.1184 19.8292 18.7645 21.8333 15.9423 21.8333C13.1202 21.8333 10.7661 19.8292 10.2257 17.1666H4.33325C4.91859 23.0621 9.89274 27.6666 15.9423 27.6666C21.9919 27.6666 26.966 23.0621 27.5513 17.1666Z"
            fill={fillColor}
         />
         <Path
            d="M27.5513 14.8334C26.966 8.93783 21.9919 4.33337 15.9423 4.33337C9.89274 4.33337 4.91859 8.93783 4.33325 14.8334H10.2257C10.7661 12.1708 13.1202 10.1667 15.9423 10.1667C18.7645 10.1667 21.1184 12.1708 21.659 14.8334H27.5513Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9424 19.5C17.8754 19.5 19.4424 17.933 19.4424 16C19.4424 14.0669 17.8754 12.5 15.9424 12.5C14.0094 12.5 12.4424 14.0669 12.4424 16C12.4424 17.933 14.0094 19.5 15.9424 19.5ZM17.6924 16C17.6924 16.9665 16.9089 17.75 15.9424 17.75C14.9759 17.75 14.1924 16.9665 14.1924 16C14.1924 15.0335 14.9759 14.25 15.9424 14.25C16.9089 14.25 17.6924 15.0335 17.6924 16Z"
            fill={fillColor}
         />
      </SVG>
   );
};

export default IconPokeballLarge;
