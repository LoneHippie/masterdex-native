import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokedexStackParamList } from '~app_sections/Pokedex/navigation/types';
import { PokemonStackParamList } from '~app_sections/Pokemon/navigation/types';

export type RootStackParamList = PokedexStackParamList & PokemonStackParamList;

export type ScreenNavigationProps = NativeStackNavigationProp<RootStackParamList>;
