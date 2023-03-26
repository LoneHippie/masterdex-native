import React from 'react';
import SVG, { Path } from 'react-native-svg';
import { IconProps } from '../types';
import useIconColor from '../useIconColor';

const IconNormal = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <SVG width="24" height="24" viewBox="0 0 24 24" fill="none" style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9102 12C19.9102 16.3687 16.3687 19.9102 12 19.9102C7.63134 19.9102 4.08984 16.3687 4.08984 12C4.08984 7.63134 7.63134 4.08984 12 4.08984C16.3687 4.08984 19.9102 7.63134 19.9102 12ZM16.5201 12C16.5201 14.4964 14.4964 16.5201 12 16.5201C9.50362 16.5201 7.47993 14.4964 7.47993 12C7.47993 9.50362 9.50362 7.47993 12 7.47993C14.4964 7.47993 16.5201 9.50362 16.5201 12Z"
            fill={fillColor}
         />
      </SVG>
   );
};

export default IconNormal;
