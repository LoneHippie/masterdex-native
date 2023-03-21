import { Pokemon } from '~app_interfaces/Pokemon';
import { PokemonType } from '~app_interfaces/PokemonType';
import { DarkPaletteType, TypeString } from '~app_interfaces/TypeStrings';
import { theme } from './theme';

const isDarkPalette = (type: TypeString): type is DarkPaletteType => {
   return [type].indexOf(type) !== -1;
};

export const useTypeStyles = (type: TypeString) => {
   const backgroundColor = theme.palette.types[type];
   const color = isDarkPalette(type) ? theme.palette.contrasts.light : theme.palette.contrasts.dark;

   return {
      backgroundColor,
      color
   };
};

interface TypeIcon {
   icon: string;
   backgroundColor: string;
}

export const getIconsByType = (pokemon: Pokemon): TypeIcon[] => {
   const types = pokemon.types.map((pokemonType: PokemonType) => pokemonType.type.name);
   return types.map((typeString) => {
      const { backgroundColor } = useTypeStyles(typeString);
      return {
         icon: `https://raw.githubusercontent.com/LoneHippie/masterdex_v2/master/src/images/${typeString}.svg`,
         backgroundColor: backgroundColor
      };
   });
};
