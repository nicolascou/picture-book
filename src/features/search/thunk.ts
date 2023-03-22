import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPhotos, startLoadingPhotos } from "./searchSlice";
import { unsplashApi } from '../../api/unsplashApi';

export const getPhotos = createAsyncThunk(
  'search/getPhotosStatus',
  async (query: string, thunkAPI) => {
    thunkAPI.dispatch(startLoadingPhotos());
    const resp = await unsplashApi.get(`/search/photos?page=1&query=${query}`);
    thunkAPI.dispatch(setPhotos(resp.data));
  }
)