import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~app_contexts/state/redux/store';

interface LoaderState {
   isLoading: boolean;
}

const initialState: LoaderState = {
   isLoading: false
};

export const loaderSlice = createSlice({
   name: 'loader',
   initialState,
   reducers: {
      showLoader: (state) => {
         state.isLoading = true;
      },
      hideLoader: (state) => {
         state.isLoading = false;
      }
   }
});

export const { showLoader, hideLoader } = loaderSlice.actions;

export const selectLoader = (state: RootState): boolean => state.loader.isLoading;

export default loaderSlice.reducer;
