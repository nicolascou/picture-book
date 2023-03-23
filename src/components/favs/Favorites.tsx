import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadLikedPhotos } from '../../features/favorites/favoriteSlice';
import Header from '../global/Header';
import { Button } from '@mui/material';
import Footer from '../global/Footer';
import FilterLikedPhotos from './FilterLikedPhotos';
import LikedPhotoIcons from './LikedPhotoIcons';

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const { likedPhotos } = useAppSelector(state => state.favoriteReducer);

  useEffect(() => {
    dispatch( loadLikedPhotos() );
  }, []);
  
  return (
    <div className='favorites'>
      <Header inFavorites={true} />
      <div className='favorites__btn-mobile'>
        <Button href='/search' className='secondary-btn'>GO BACK TO SEARCH 🔎</Button>
      </div>

      <FilterLikedPhotos />

      <div className='favorites__photos'>
        {
          likedPhotos &&
          likedPhotos.map(({ id, urls }) => (
            <div style={{ position: 'relative' }} key={id}>
              <img src={urls.regular} 
                className='favorites__photos__image' alt={id} />
              <LikedPhotoIcons photoId={id} />
            </div>
          ))
        }
      </div>
      
      <div style={{ height: '50px' }}></div>
      <Footer />
    </div>
  )
}

export default Favorites