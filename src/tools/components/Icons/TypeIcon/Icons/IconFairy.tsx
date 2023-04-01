import React from 'react';
import { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';
import StandardizedIcon from '../../utils/StandardizedIcon';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconFairy = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <G clipPath="url(#clip0_2_16)">
            <Path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M6.61146 17.2727L9.49856 16.4355L11.9922 20.995C11.9955 21.0009 12.0039 21.0009 12.0072 20.995L14.5008 16.4355L17.3879 17.2727C17.3944 17.2745 17.4004 17.2685 17.3985 17.262L16.5612 14.4321L20.9949 12.0072C21.0009 12.0039 21.0009 11.9955 20.995 11.9922L16.5247 9.54732L17.3985 6.59385C17.4004 6.58738 17.3944 6.58137 17.3879 6.58323L14.4331 7.44002L12.0072 3.00444C12.0039 2.99852 11.9955 2.99852 11.9922 3.00444L9.56631 7.44002L6.61146 6.58323C6.60499 6.58137 6.59898 6.58738 6.60091 6.59385L7.47472 9.54732L3.00444 11.9922C2.99852 11.9955 2.99852 12.0039 3.00444 12.0072L7.43816 14.4321L6.60091 17.262C6.59898 17.2685 6.60499 17.2745 6.61146 17.2727ZM8.85183 12.0308L10.8972 13.1494L12.0158 15.1948C12.0191 15.2007 12.0276 15.2007 12.0308 15.1948L13.1494 13.1494L15.1948 12.0308C15.2007 12.0276 15.2007 12.0191 15.1948 12.0158L13.1494 10.8972L12.0308 8.85186C12.0276 8.84592 12.0191 8.84592 12.0158 8.85186L10.8972 10.8972L8.85183 12.0158C8.84592 12.0191 8.84592 12.0276 8.85183 12.0308Z"
               fill={fillColor}
            />
         </G>
         <Defs>
            <ClipPath id="clip0_2_16">
               <Rect width="18" height="18" fill={fillColor} transform="translate(3 3)" />
            </ClipPath>
         </Defs>
      </StandardizedIcon>
   );
};

export default IconFairy;
