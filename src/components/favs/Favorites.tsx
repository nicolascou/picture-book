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
  }, [dispatch]);
  
  return (
    <>
      <Header inFavorites={true} />
      <div className='favorites'>
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
        {
          likedPhotos.length === 0 &&
          <div className='favorites__no-photos'>
            <h2 className='favorites__no-photos__title'>no photos found 😓</h2>
            <p className='favorites__no-photos__text'>go back to search to add photos</p>
          </div>
        }
        
      </div>
      <Footer />
    </>
  )
}

export default Favorites