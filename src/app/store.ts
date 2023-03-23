import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import favoriteReducer from '../features/favorites/favoriteSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    favoriteReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
