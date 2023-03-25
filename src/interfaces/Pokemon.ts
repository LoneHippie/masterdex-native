import { Move } from './Move';
import { PokemonType } from './PokemonType';

interface Color {
   name: string;
}

interface Specs {
   color: {
      name: string;
   };
   genId: number;
}

interface Effect {
   shortEffect: string;
}

interface Ability {
   ability: {
      name: string;
      effects: Effect[];
   };
}

interface Stat {
   baseStat: number;
   id: number;
}

export interface Pokemon {
   abilities: Ability[];
   height: number;
   color: Color;
   id: number;
   name: string;
   stats: Stat[];
   types: PokemonType[];
   weight: number;
   specs: Specs;
   moves: Move[];
}
