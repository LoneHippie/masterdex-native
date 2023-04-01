import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPokemon } from '~app_contexts/api/pokeapi';
import { hideLoader, showLoader } from '~app_contexts/loader/loaderSlice';
import { Pokemon } from '~app_interfaces/Pokemon';

const useSearchScreen = () => {
   const dispatch = useDispatch();

   const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

   const getPokemon = useCallback(() => {
      dispatch(showLoader());

      getAllPokemon()
         .then((pokemon) => {
            pokemon.length = 101;
            setAllPokemon(pokemon);
         })
         .catch((error) => console.log(error))
         .finally(() => dispatch(hideLoader()));
   }, []);

   useEffect(() => {
      getPokemon();
   }, []);

   return {
      allPokemon
   };
};

export default useSearchScreen;
