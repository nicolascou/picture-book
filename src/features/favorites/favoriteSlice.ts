import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LikedPhoto } from '../../types';

interface FavoriteState {
  likedPhotos: LikedPhoto[];
}

const initialState: FavoriteState = {
  likedPhotos: []
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    loadLikedPhotos: (state) => {
      state.likedPhotos = JSON.parse(localStorage.getItem('picture-book') || '[]');
    },
    searchByDescription: (state, action: PayloadAction<string>) => {
      state.likedPhotos = state.likedPhotos.filter(({ description }) => {
        if (description) {
          return description.toLowerCase().includes(action.payload);
        }
        return false;
      });
    },
    orderBy: (state, action: PayloadAction<'width' | 'height' | 'date_added' | 'likes'>) => {
      if (action.payload === 'width') {
        state.likedPhotos = state.likedPhotos.sort((a, b) => b.width - a.width);
      } else if (action.payload === 'height') {
        state.likedPhotos = state.likedPhotos.sort((a, b) => b.height - a.height);
      } else if (action.payload === 'date_added') {
        state.likedPhotos = state.likedPhotos.sort((a, b) => {
          return +new Date(b.date_added) - +new Date(a.date_added);
        });
      } else if (action.payload === 'likes') {
        state.likedPhotos = state.likedPhotos.sort((a, b) => b.likes - a.likes);
      }
    }
  },
})

export const { loadLikedPhotos, searchByDescription, orderBy } = favoriteSlice.actions

export default favoriteSlice.reducer