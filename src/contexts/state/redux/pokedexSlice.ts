import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gen } from '~app_interfaces/Gen';
import { TypeString } from '~app_interfaces/TypeStrings';
import { RootState } from './store';

interface PokedexState {
   genFilter?: Gen;
   typeFilter?: TypeString;
}

const initalPokedexSlice: PokedexState = {
   genFilter: undefined,
   typeFilter: undefined
};

export const PokedexSlice = createSlice({
   name: 'pokedex',
   initialState: initalPokedexSlice,
   reducers: {
      setPokedexFilters: (state, action: PayloadAction<PokedexState>) => {
         return {
            ...state,
            ...action.payload
         };
      }
   }
});

export const { setPokedexFilters } = PokedexSlice.actions;

export const pokedexReducer = PokedexSlice.reducer;

export const selectPokdexFilters = (state: RootState): PokedexState => state.pokedex;
