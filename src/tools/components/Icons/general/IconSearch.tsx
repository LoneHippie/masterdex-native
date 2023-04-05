import React from 'react';
import { Path } from 'react-native-svg';
import { IconProps } from '../TypeIcon/types';
import useIconColor from '../TypeIcon/useIconColor';
import StandardizedIcon from '../utils/StandardizedIcon';

const IconSearch = ({ style, iconColor }: IconProps) => {
   const { fillColor } = useIconColor({ iconColor });
   return (
      <StandardizedIcon style={style}>
         <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.8187 15.9087L8.0913 17.1813L4.2735 21L3 19.7274L6.8187 15.9087ZM13.8 15.6C10.8228 15.6 8.4 13.1772 8.4 10.2C8.4 7.2219 10.8228 4.8 13.8 4.8C16.7781 4.8 19.2 7.2219 19.2 10.2C19.2 13.1772 16.7781 15.6 13.8 15.6ZM13.8 3C9.82381 3 6.6 6.2238 6.6 10.2C6.6 14.1762 9.82381 17.4 13.8 17.4C17.7771 17.4 21 14.1762 21 10.2C21 6.2238 17.7771 3 13.8 3Z"
            fill={fillColor}
         />
      </StandardizedIcon>
   );
};

export default IconSearch;
