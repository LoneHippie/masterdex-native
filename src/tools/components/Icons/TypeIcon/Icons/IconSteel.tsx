import React from 'react';
import { Path } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconSteel = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.0018 11.9482C2.9994 11.9441 2.9994 11.9391 3.00179 11.935L7.52795 4.20179C7.5303 4.19778 7.53463 4.19531 7.53927 4.19531H16.5103C16.515 4.19531 16.5193 4.1978 16.5217 4.20185L20.9982 11.935C21.0006 11.9391 21.0006 11.9441 20.9982 11.9481L16.5217 19.6726C16.5193 19.6767 16.515 19.6792 16.5103 19.6792H7.53927C7.53463 19.6792 7.5303 19.6767 7.52795 19.6727L3.0018 11.9482ZM16.1701 11.9372C16.1701 14.2396 14.3037 16.106 12.0014 16.106C9.69909 16.106 7.83268 14.2396 7.83268 11.9372C7.83268 9.6349 9.69909 7.76852 12.0014 7.76852C14.3037 7.76852 16.1701 9.6349 16.1701 11.9372Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconSteel;
