import React from 'react';
import { Path } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconIce = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5107 4.37256L16.5661 9.23643L12.3238 11.2729L12.2715 6.6805L16.5107 4.37256Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7632 12.0368L16.5637 14.4389L12.3616 12.033L16.5615 9.8269L20.7632 12.0368Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6146 12.0368L7.41499 14.4389L3.21289 12.033L7.41281 9.8269L11.6146 12.0368Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.36792 4.35266L11.7268 6.51146L11.6154 11.2159L7.49976 9.17763L7.36792 4.35266Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6294 19.6474L12.2705 17.4886L12.382 12.7841L16.4976 14.8224L16.6294 19.6474Z"
            fill={fillColor}
         />
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.51854 19.6911L7.46313 14.8273L11.7055 12.7908L11.7578 17.3832L7.51854 19.6911Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconIce;
