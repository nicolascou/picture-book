import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPhotos, startLoadingPhotos } from "./searchSlice";
import { unsplashApi } from '../../api/unsplashApi';
import { UnsplashPhoto, Photo } from '../../types';

export const getPhotos = createAsyncThunk(
  'search/getPhotosStatus',
  async (endpoint: string, thunkAPI) => {
    thunkAPI.dispatch(startLoadingPhotos());
    const { data } = await unsplashApi.get(endpoint);

    let arrayOfPhotos;
    if (endpoint === 'photos/random?count=10') {
      arrayOfPhotos = data;
    } else {
      arrayOfPhotos = data.results;
    }

    const photos: Photo[] = arrayOfPhotos.map((photo: UnsplashPhoto) => ({
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
)