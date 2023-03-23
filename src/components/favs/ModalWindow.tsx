import React, { useState, useEffect } from 'react'
import { LikedPhoto } from '../../types';
import { Button } from '@mui/material';

interface ModalWindowProps {
  photo?: LikedPhoto;
  closeModal: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ photo, closeModal }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(photo?.description || '');
  }, [photo])
  
  return (
    <>
      {
        photo &&
        <div className='favorites__modal-wrapper'>
          <div className='favorites__modal'>
            <button className='favorites__modal__cross' onClick={closeModal}>
              <svg fill='white' width='24px' height='24px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
              </svg>
            </button>
            <div className='favorites__modal__edit'>
              <h3 className='favorites__modal__title'>EDIT DESCRIPTION</h3>
              <textarea className='favorites__modal__edit__input'
              value={description} onChange={(e) => setDescription(e.target.value)} />
              <Button className='secondary-btn'>SAVE</Button>
            </div>
            <div className='favorites__modal__props'>
              <h3 className='favorites__modal__title'>PROPERTIES</h3>
              <p className='favorites__modal__props__text'>WIDTH: {photo.width}</p>
              <p className='favorites__modal__props__text'>HEIGHT: {photo.height}</p>
              <p className='favorites__modal__props__text'>LIKES: {photo.likes}</p>
              <p className='favorites__modal__props__text'>DATE ADDED: {new Date(photo.date_added).toISOString().split('T')[0]}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ModalWindow