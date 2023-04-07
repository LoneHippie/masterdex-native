import { Pokemon } from '~app_interfaces/Pokemon';

export type PokemonStackParamList = {
   PokemonRouterStack: { pokemon: Pokemon };
   PokemonOverviewScreen: { pokemon: Pokemon };
   PokemonMovepoolScreen: { pokemon: Pokemon };
   PokemonDetailsScreen: { pokemon: Pokemon };
};
