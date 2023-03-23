import React from 'react'
import { LikedPhoto } from '../../types';

interface ModalWindowProps {
  photo?: LikedPhoto;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ photo }) => {
  return (
    <div className='favorites__modal-wrapper'>
      <div className={`favorites__modal ${!photo ? 'favorites__modal--hidden' : ''}`}>
        <button className='favorites__modal__cross'>
          <svg fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
          </svg>
        </button>
        <div className='favorites__modal__edit'>
          <h3>EDIT DESCRIPTION</h3>
        </div>
        <div className='favorites__modal__props'>
          <h3>PROPERTIES</h3>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow