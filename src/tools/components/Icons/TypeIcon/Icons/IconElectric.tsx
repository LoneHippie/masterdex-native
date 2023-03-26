import React from 'react';
import SVG, { Path } from 'react-native-svg';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconElectric = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.36334 3.02052C8.35985 3.01048 8.36734 3 8.37796 3H14.7001C14.7069 3 14.7129 3.00442 14.7149 3.01089L17.6187 12.3927C17.6218 12.4027 17.6144 12.4128 17.6039 12.4128H13.395C13.3899 12.4128 13.3862 12.4177 13.3876 12.4226L15.8015 20.9201C15.8062 20.9365 15.7846 20.9473 15.7743 20.9336L6.39351 8.45861C6.38585 8.44841 6.39312 8.43386 6.40587 8.43386H10.2258C10.2311 8.43386 10.2348 8.42862 10.2331 8.42359L8.36334 3.02052Z"
            fill={fillColor}
         />
      </SVG>
   );
};

export default IconElectric;
