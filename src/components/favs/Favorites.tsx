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

  const [showTopButton, setShowTopButton] = useState(false);

  const handleNavigation = () => {
    if (window.scrollY > 400) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);
  
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
              <div key={id} className='favorites__photos__image-wrapper'>
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

        <button className={`returnToTop ${showTopButton ? '' : 'returnToTop--hidden'}`} 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <svg fill='black' height='30px' width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z" />
          </svg>
        </button>
        
      </div>
      <Footer />
    </>
  )
}

export default Favorites