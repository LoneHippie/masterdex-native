import { useMemo } from 'react';

interface Props {
   iconColor?: string;
}

const useIconColor = ({ iconColor }: Props) => {
   const fillColor = useMemo(() => (iconColor ? iconColor : '#FFFFFF'), [iconColor]);
   return {
      fillColor
   };
};

export default useIconColor;
