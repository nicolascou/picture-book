import React, { useState } from 'react'
import { Button } from '@mui/material';
import Header from '../global/Header';
import Footer from '../global/Footer';
import { getPhotos } from '../../features/search/thunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Pagination from './Pagination';
import HeartIcon from './HeartIcon';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const dispatch = useAppDispatch();
  const { isLoading, photos } = useAppSelector(state => state.searchReducer);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.length === 0) {
      dispatch(getPhotos(`photos/random?count=10`));
    } else {
      dispatch(getPhotos(`search/photos?page=1&query=${query}`));
    }

    // Remove focus from input element
    const input = event.currentTarget.querySelector('input');
    input && input.blur();
  }

  return (
    <div className='search'>
      <Header />
      <div className='search__btn-mobile'>
        <Button href='/picture-book/my-photos' className='secondary-btn'>MY PHOTOS 📷</Button>
      </div>

      <form onSubmit={(e) => handleSubmit(e)} className='search__form'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} 
          placeholder='For example, beautiful beach' 
          className='search__form__input' 
          type="text" id="searchInput" 
        />
        <Button type='submit' className='search__form__btn default-btn'>SEARCH</Button>
      </form>
      <p className='search__text'>You can search anything you want</p>

      {
        isLoading && <div className='search__loading'></div>
      }
      
      <div className='search__photos'>
        {
          photos &&
          photos.map(({ id, urls }) => (
            <div style={{ position: 'relative' }} key={id}>
              <img src={urls.regular} 
                className='search__photos__image' alt={id} />
              <HeartIcon photoId={id} />
            </div>
          ))
        }
      </div>

      {
        photos.length > 0 && 
        <Pagination query={query} />
      }
      
      <div style={{ height: '100px' }}></div>
      <Footer />
    </div>
  )
}

export default Search