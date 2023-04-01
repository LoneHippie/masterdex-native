import React from 'react';
import { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconFighting = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <G clipPath="url(#clip0_2_17)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M6.10196 4.49645C6.3198 3.63638 7.09897 3 8.02675 3C8.72266 3 9.33498 3.35806 9.6895 3.9H10.27C10.6307 3.52986 11.1346 3.3 11.6922 3.3C12.5097 3.3 13.2119 3.79412 13.5163 4.5H14.0023C14.3068 4.30987 14.6667 4.2 15.0522 4.2C15.8698 4.2 16.5719 4.69412 16.8762 5.4H18.1979C18.2092 5.4 18.2198 5.40304 18.2289 5.40835C18.2893 5.40282 18.3504 5.4 18.4122 5.4C19.5087 5.4 20.3976 6.28892 20.3976 7.38546V13.339L20.3977 13.35L20.3976 13.361V13.4468C20.3976 13.4831 20.3966 13.5193 20.3947 13.5553C20.2752 17.6854 16.5615 21 11.9976 21C7.35846 21 3.59766 17.575 3.59766 13.35C3.59766 11.3106 4.47392 9.45761 5.90227 8.08623C5.89871 10.0744 5.93229 12.1299 6.08709 12.0946C6.5016 12.0001 6.17774 5.84201 6.10196 4.49645Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_17">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </StandardizedIcon>
   );
};

export default IconFighting;
