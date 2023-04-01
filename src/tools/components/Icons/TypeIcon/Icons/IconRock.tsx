import React from 'react';
import { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconRock = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <G clipPath="url(#clip0_2_27)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M16.8916 11.6047C16.8906 11.6033 16.8901 11.6016 16.8904 11.5999L18.0388 4.90377C18.0393 4.90069 18.042 4.89844 18.0451 4.89844H18.4085C18.4113 4.89844 18.4138 4.90026 18.4146 4.90293L21.0018 13.0944C21.0026 13.097 21.0017 13.0998 20.9996 13.1014L19.0921 14.5908C19.0892 14.593 19.0851 14.5924 19.083 14.5895L16.8916 11.6047ZM2.96484 16.0437C2.96484 16.0465 2.96663 16.049 2.96927 16.0499L6.90146 17.3356C6.90336 17.3362 6.90547 17.3359 6.90713 17.3347L15.6965 11.2668C15.698 11.2658 15.699 11.2642 15.6992 11.2624L16.6418 4.93811C16.6423 4.93423 16.6393 4.93074 16.6354 4.93074H8.85021C8.84828 4.93074 8.84648 4.93159 8.84525 4.93306L2.96632 12.0251C2.96537 12.0263 2.96484 12.0277 2.96484 12.0292V16.0437ZM8.54003 17.6631L12.8359 19.0703C12.8378 19.071 12.84 19.0707 12.8416 19.0695L17.9561 15.4008C17.9589 15.3988 17.9597 15.3949 17.9577 15.392L16.0404 12.5389C16.0384 12.5359 16.0344 12.5351 16.0315 12.5372L8.54003 17.6631Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_27">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </StandardizedIcon>
   );
};

export default IconRock;
