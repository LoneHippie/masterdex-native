import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectPokdexFilters, setPokedexFilters } from '~app_contexts/state/redux/pokedexSlice';
import { Gen } from '~app_interfaces/Gen';
import { TypeString } from '~app_interfaces/TypeStrings';
import { gens } from '~app_tools/utils/constants/gens';
import { typeStrings } from '~app_tools/utils/constants/typeStrings';
import { GenOption, TypeOption } from './types';

const useSearchHeader = () => {
   const dispatch = useDispatch();
   const { genFilter, typeFilter } = useSelector(selectPokdexFilters);

   const typeOptions: TypeOption[] = useMemo(() => {
      const options = typeStrings.map((type) => {
         return {
            key: type.toUpperCase(),
            value: type
         };
      });
      return [{ key: 'NONE', value: undefined }, ...options];
   }, []);

   const genOptions: GenOption[] = useMemo(() => {
      const options = gens.map((gen) => {
         return {
            key: `Generation ${gen}`,
            value: gen
         };
      });
      return [{ key: 'NONE', value: undefined }, ...options];
   }, []);

   const handleChangeType = useCallback((value: TypeString | undefined) => {
      dispatch(setPokedexFilters({ typeFilter: value }));
   }, []);

   const handleChangeGen = useCallback((value: Gen | undefined) => {
      dispatch(setPokedexFilters({ genFilter: value }));
   }, []);

   return {
      genFilter,
      typeFilter,
      handleChangeGen,
      handleChangeType,
      genOptions,
      typeOptions
   };
};

export default useSearchHeader;
