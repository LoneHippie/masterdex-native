import React from 'react';
import { useSelector } from 'react-redux';
import FullScreenLoader from '~app_tools/components/loaders/FullScreenLoader';
import { selectLoader } from './loaderSlice';

const Apploader = () => {
   const isLoading = useSelector(selectLoader);

   return <FullScreenLoader isLoading={isLoading} />;
};

export default Apploader;
