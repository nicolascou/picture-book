import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loadLikedPhotos } from '../../features/favorites/favoriteSlice';

interface LikedPhotoIconsProps {
  photoId: string;
}

const LikedPhotoIcons: React.FC<LikedPhotoIconsProps> = ({ photoId }) => {
  // const { likedPhotos } = useAppSelector(state => state.favoriteReducer);
  const dispatch = useAppDispatch()

  const removePhoto = () => {
    let array: any[] = JSON.parse(localStorage.getItem('picture-book') || '[]');
    array = array.filter((photo) => photo.id !== photoId);
    localStorage.setItem('picture-book', JSON.stringify(array));
    dispatch( loadLikedPhotos() )
  }
  
  return (
    <>
      <button className='favorites__photos__trash' onClick={removePhoto}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill='white'>
          <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/>
        </svg>
      </button>
      <button className='favorites__photos__edit'>
      <svg fill='white' width='24px' height='24px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-12.023-7.083c-1.334 3.916-1.48 4.232-1.48 4.587 0 .527.46.749.749.749.352 0 .668-.137 4.574-1.493zm1.06-1.061 3.846 3.846 8.824-8.814c.195-.195.293-.451.293-.707 0-.255-.098-.511-.293-.706-.692-.691-1.742-1.741-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z" fill-rule="nonzero"/>
      </svg>
      </button>
      <button className='favorites__photos__download'>
        <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
        </svg>
      </button>
    </>
  )
}

export default LikedPhotoIcons