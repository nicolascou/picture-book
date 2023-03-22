import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UnsplashResponse } from '../../types';

interface SearchState {
  response: UnsplashResponse;
  isLoading: boolean;
};

const initialState: SearchState = {
  response: {
    total: 0,
    total_pages: 0,
    results: []
  },
  isLoading: false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    startLoadingPhotos: (state) => {
      state.isLoading = true;
    },
    setPhotos: (state, action: PayloadAction<UnsplashResponse>) => {
      state.response = action.payload
    },
  },
})

export const { startLoadingPhotos, setPhotos } = searchSlice.actions

export default searchSlice.reducer