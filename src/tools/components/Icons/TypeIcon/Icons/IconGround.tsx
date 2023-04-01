import React from 'react';
import { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconGround = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <G clipPath="url(#clip0_2_22)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M6.96436 18.4601C6.95947 18.4601 6.95606 18.4553 6.95768 18.4507L11.5531 5.46565C11.5541 5.46283 11.5568 5.46094 11.5598 5.46094H16.4656C16.4686 5.46094 16.4713 5.46284 16.4723 5.46568L20.9995 18.4507C21.0011 18.4553 20.9977 18.4601 20.9929 18.4601H7.10245H6.96436ZM3.00708 18.5109C3.00214 18.5109 2.99872 18.506 3.00046 18.5014L6.42255 9.36525C6.42359 9.36247 6.42623 9.36064 6.42918 9.36064H9.40259C9.40751 9.36064 9.41092 9.36553 9.40923 9.37014L6.10016 18.5063C6.09915 18.509 6.09649 18.5109 6.09351 18.5109H3.00708Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_22">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </StandardizedIcon>
   );
};

export default IconGround;
