import React, { useMemo } from 'react';
import SVG, { Path } from 'react-native-svg';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconGrass = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.42471 18.4916C6.36293 18.4335 6.30183 18.3742 6.24144 18.3138C3.05331 15.1257 3.05331 9.95672 6.24144 6.76861C9.42955 3.58047 19.5882 3.36719 19.5882 3.36719C19.5882 3.36719 20.9748 15.1257 17.7867 18.3138C14.9552 21.1453 10.5613 21.4621 7.38026 19.2641L9.94343 16.1187L14.0409 15.234L10.6962 14.8997L12.8218 12.7354L15.2414 12.2053L13.3281 11.6387L15.2414 8.1872L12.5199 11.2397L11.469 9.75675L11.8389 12.2053L9.94343 14.3422L9.06477 11.6387V15.234L6.42471 18.4916Z"
            fill={fillColor}
         />
      </SVG>
   );
};

export default IconGrass;
