import { Pokemon } from '~app_interfaces/Pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PokemonState {
   pokemon: Pokemon[];
}

const intialPokemonSlice: PokemonState = {
   pokemon: []
};

export const PokemonSlice = createSlice({
   name: 'pokemon',
   initialState: intialPokemonSlice,
   reducers: {
      setPokemon: (state, action: PayloadAction<Pokemon[]>) => {
         return {
            pokemon: action.payload
         };
      }
   }
});

export const { setPokemon } = PokemonSlice.actions;

export const pokemonReducer = PokemonSlice.reducer;

export const selectPokemon = (state: RootState): Pokemon[] => state.pokemon.pokemon;
