import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
   const { genFilter, typeFilter, nameFilter } = useSelector(selectPokdexFilters);

   const [selectedType, setSelectedType] = useState<TypeString | undefined>();
   const [selectedGen, setSelectedGen] = useState<Gen | undefined>();

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

   const handleChangeType = useCallback(
      (value: TypeString | undefined) => {
         setSelectedType(value);
         dispatch(setPokedexFilters({ typeFilter: value, nameFilter: undefined }));
      },
      [dispatch]
   );

   const handleChangeGen = useCallback(
      (value: Gen | undefined) => {
         setSelectedGen(value);
         dispatch(setPokedexFilters({ genFilter: value, nameFilter: undefined }));
      },
      [dispatch]
   );

   const handleClearFilters = useCallback(() => {
      setSelectedGen(undefined);
      setSelectedType(undefined);
   }, []);

   useEffect(() => {
      if (nameFilter) {
         handleClearFilters();
      }
   }, [nameFilter]);

   return {
      genFilter,
      typeFilter,
      handleChangeGen,
      handleChangeType,
      genOptions,
      typeOptions,
      selectedType,
      selectedGen
   };
};

export default useSearchHeader;
