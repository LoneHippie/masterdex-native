import React from 'react';
import SVG, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconPoison = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
         <G clipPath="url(#clip0_2_25)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M18.0406 16.8322C19.8583 15.3788 21 13.2788 21 10.9436C21 6.55644 16.9706 3 12 3C7.02943 3 3 6.55644 3 10.9436C3 13.1945 4.06079 15.2269 5.76523 16.6723C5.66193 17.029 5.60526 17.4169 5.60526 17.8226C5.60526 19.5774 6.66564 21 7.9737 21C8.82363 21 9.56902 20.3994 9.98685 19.4972C10.4047 20.3994 11.1501 21 12 21C12.7748 21 13.4626 20.5009 13.8947 19.7293C14.3269 20.5009 15.0147 21 15.7895 21C17.0975 21 18.1579 19.5774 18.1579 17.8226C18.1579 17.4768 18.1167 17.1439 18.0406 16.8322ZM17.2105 11.1011C17.2105 13.3284 14.8247 15.134 11.8816 15.134C8.93849 15.134 6.55264 13.3284 6.55264 11.1011C6.55264 8.8738 8.93849 7.06821 11.8816 7.06821C14.8247 7.06821 17.2105 8.8738 17.2105 11.1011Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_25">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </SVG>
   );
};

export default IconPoison;
