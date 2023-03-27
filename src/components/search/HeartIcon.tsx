import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../app/hooks';
import { LikedPhoto } from '../../types';

interface HeartIconProps {
  photoId: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({ photoId }) => {
  const [liked, setLiked] = useState(false);

  const { photos } = useAppSelector(state => state.searchReducer);

  const handleLike = () => {
    let array: any[] = JSON.parse(localStorage.getItem('picture-book') || '[]');
    if (!liked) {
      let photo = photos.find((photo) => photo.id === photoId);
      if (photo) {
        const likedPhoto: LikedPhoto = {
          ...photo,
          date_added: new Date()
        };
        array.push(likedPhoto);
      }
    } else if (liked) {
      array = array.filter((photo) => photo.id !== photoId);
    }
    localStorage.setItem('picture-book', JSON.stringify(array));
    setLiked(!liked);
  }

  useEffect(() => {
    let localPhotos = JSON.parse(localStorage.getItem('picture-book') || '[]');
    setLiked(localPhotos.some((photo: LikedPhoto) => photo.id === photoId));
    // eslint-disable-next-line
  }, []);
  
  return (
    <button className='search__photos__heart' onClick={handleLike}>
      <svg className={liked ? 'search__photos__heart--liked' : ''}
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='white'>
        <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
      </svg>
    </button>
  )
}

export default HeartIcon