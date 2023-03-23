import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadLikedPhotos } from '../../features/favorites/favoriteSlice';
import Header from '../global/Header';
import { Button } from '@mui/material';
import Footer from '../global/Footer';
import FilterLikedPhotos from './FilterLikedPhotos';
import LikedPhotoIcons from './LikedPhotoIcons';
import { LikedPhoto } from '../../types';
import ModalWindow from './ModalWindow';

const Favorites: React.FC = () => {
  const [editPhoto, setEditPhoto] = useState<LikedPhoto>();
  const dispatch = useAppDispatch();
  const { likedPhotos } = useAppSelector(state => state.favoriteReducer);

  const openModal = (photo: LikedPhoto) => setEditPhoto(photo);
  const closeModal = () => setEditPhoto(undefined);

  useEffect(() => {
    dispatch( loadLikedPhotos() );
  }, []);
  
  return (
    <div className='favorites'>
      <Header inFavorites={true} />
      <div className='favorites__btn-mobile'>
        <Button href='/picture-book/search' className='secondary-btn'>GO BACK TO SEARCH 🔎</Button>
      </div>

      <FilterLikedPhotos />

      <ModalWindow photo={editPhoto} closeModal={closeModal} />

      <div className='favorites__photos'>
        {
          likedPhotos &&
          likedPhotos.map(({ id, urls }) => (
            <div style={{ position: 'relative' }} key={id}>
              <img src={urls.regular} 
                className='favorites__photos__image' alt={id} />
              <LikedPhotoIcons photoId={id} openModal={openModal} />
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