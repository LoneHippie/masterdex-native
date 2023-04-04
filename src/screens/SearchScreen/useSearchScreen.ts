import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllPokemon } from '~app_contexts/api/pokeapi';
import { hideLoader, showLoader } from '~app_contexts/loader/loaderSlice';
import { selectPokdexFilters } from '~app_contexts/state/redux/pokedexSlice';
import { selectPokemon, setPokemon } from '~app_contexts/state/redux/pokemonSlice';
import { Pokemon } from '~app_interfaces/Pokemon';

const useSearchScreen = () => {
   const dispatch = useDispatch();
   const pokemon = useSelector(selectPokemon);
   const { genFilter, typeFilter } = useSelector(selectPokdexFilters);

   const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);

   const getPokemon = useCallback(() => {
      dispatch(showLoader());

      getAllPokemon()
         .then((pokemon) => {
            dispatch(setPokemon(pokemon));
         })
         .catch((error) => console.log(error))
         .finally(() => dispatch(hideLoader()));
   }, []);

   const handleSetFilteredPokemon = useCallback(() => {
      const filtered = pokemon.filter((el) => {
         const typeCheck = el.types.some((type) => type.type.name === typeFilter);
         const genCheck = el.specs.genId === genFilter;

         if ((genFilter && !typeFilter) || (!genFilter && typeFilter)) {
            if (typeCheck || genCheck) return el;
         } else if (genFilter && typeFilter) {
            if (typeCheck && genCheck) return el;
         }
      });

      setFilteredPokemon(filtered);
   }, [genFilter, typeFilter, pokemon]);

   useEffect(() => {
      if (!pokemon.length) {
         getPokemon();
      }
   }, [pokemon]);

   useEffect(() => {
      handleSetFilteredPokemon();
   }, [genFilter, typeFilter]);

   return {
      filteredPokemon
   };
};

export default useSearchScreen;
