import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPhotos, startLoadingPhotos } from "./searchSlice";
import { unsplashApi } from '../../api/unsplashApi';
import { UnsplashPhoto, Photo } from '../../types';

export const getPhotos = createAsyncThunk(
  'search/getPhotosStatus',
  async (endpoint: string, thunkAPI) => {
    thunkAPI.dispatch(startLoadingPhotos());
    const resp = await unsplashApi.get(endpoint);

    if (endpoint === 'photos/random?count=10') {
      thunkAPI.dispatch(setPhotos(resp.data));
    } else {
      const photos: Photo[] = resp.data.results.map((photo: UnsplashPhoto) => ({
          id: photo.id,
          width: photo.width,
          height: photo.height,
          likes: photo.likes,
          description: photo.description,
          urls: {
            full: photo.urls.full,
            regular: photo.urls.regular,
            thumb: photo.urls.thumb
          }
      }))

      thunkAPI.dispatch(setPhotos(photos));
    }
  }
)