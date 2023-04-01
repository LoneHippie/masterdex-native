import React from 'react';
import { Path } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconFlying = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.28284 19.7953C11.9197 19.7953 14.1771 18.3298 15.1091 16.2524C15.1205 16.227 11.3674 17.2277 11.4871 16.874C11.5405 16.716 13.8412 15.8756 15.5173 14.8953C16.4807 14.3318 16.9243 13.1391 16.9243 13.1391C16.9243 13.1391 15.3013 13.9271 14.4808 14.127C12.8273 14.5299 11.3718 14.4865 11.3718 14.4445C11.3718 14.3537 13.7886 13.8945 17.1477 11.8476C18.7277 10.8847 19.1569 9.22628 19.1569 9.22628C19.1569 9.22628 17.4198 10.261 16.3697 10.6026C13.8793 11.4127 11.6068 11.6568 11.6068 11.5472C11.6068 11.3125 13.6067 10.7626 15.7271 9.73513C16.8296 9.20093 17.7844 8.50301 18.8909 7.72686C20.7014 6.45698 21 4.19531 21 4.19531C21 4.19531 19.2143 5.34703 18.3429 5.72951C14.7471 7.30773 11.5721 8.13559 9.28284 8.31482C5.82713 8.58538 3 10.9965 3 14.127C3 17.2575 5.81292 19.7953 9.28284 19.7953Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconFlying;
