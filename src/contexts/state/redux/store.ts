import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from '../../loader/loaderSlice';
import { pokedexReducer } from './pokedexSlice';
import { pokemonReducer } from './pokemonSlice';

export const store = configureStore({
   reducer: {
      loader: loaderReducer,
      pokemon: pokemonReducer,
      pokedex: pokedexReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
