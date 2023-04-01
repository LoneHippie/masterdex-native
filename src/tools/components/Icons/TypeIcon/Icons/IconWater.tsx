import React from 'react';
import { Path } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconWater = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.842 15.1822C17.842 18.3948 15.2278 20.9992 12.003 20.9992C8.77825 20.9992 6.16406 18.3948 6.16406 15.1822C6.16406 12.0576 11.6872 3.47629 11.9901 3.00801C11.997 2.99733 12.0091 2.99733 12.016 3.00801C12.3189 3.47629 17.842 12.0576 17.842 15.1822ZM11.0297 19.1343C8.06672 18.486 8.57374 15.2038 8.57374 15.2038C8.57374 15.2038 9.38283 17.1851 11.3463 17.8269C13.3097 18.4687 15.6824 17.5274 15.6824 17.5274C15.6824 17.5274 13.9927 19.7826 11.0297 19.1343Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconWater;
