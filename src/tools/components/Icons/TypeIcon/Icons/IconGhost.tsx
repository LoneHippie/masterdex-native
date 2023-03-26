import React from 'react';
import SVG, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconGhost = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
         <G clipPath="url(#clip0_2_20)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M15.971 20.9377C14.3473 21.0208 12.4885 21.0208 11.8568 20.9377C6.92941 20.2894 3 16.6868 3 11.8172C3 6.94759 7.02943 3 12 3C16.9706 3 21 6.94759 21 11.8172C21 14.082 20.1284 16.1473 18.6959 17.7089C18.3069 18.1329 18.8406 18.4304 19.3829 18.7326C19.9147 19.029 20.4548 19.3299 20.1409 19.7594C19.7951 20.2326 17.92 20.8379 15.971 20.9377ZM10.7344 10.715C10.7344 11.4759 10.1048 12.0927 9.32812 12.0927C8.55149 12.0927 7.92188 11.4759 7.92188 10.715C7.92188 10.2047 8.20506 9.75928 8.62584 9.52117C8.65007 10.1846 9.19555 10.715 9.86493 10.715L10.7344 10.715ZM15.0929 9.52117C15.0687 10.1846 14.5232 10.715 13.8538 10.715H12.9844C12.9844 11.4759 13.614 12.0927 14.3906 12.0927C15.1673 12.0927 15.7969 11.4759 15.7969 10.715C15.7969 10.2047 15.5137 9.75928 15.0929 9.52117Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_20">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </SVG>
   );
};

export default IconGhost;
