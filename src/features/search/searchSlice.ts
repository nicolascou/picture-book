import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Photo } from '../../types';

interface SearchState {
  photos: Photo[];
  isLoading: boolean;
};

const initialState: SearchState = {
  photos: [],
  isLoading: false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    startLoadingPhotos: (state) => {
      state.isLoading = true;
    },
    setPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
  },
})

export const { startLoadingPhotos, setPhotos } = searchSlice.actions

export default searchSlice.reducer