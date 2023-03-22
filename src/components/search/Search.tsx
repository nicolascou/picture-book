import React, { useState } from 'react'
import { Button } from '@mui/material';
import Header from '../global/Header';
import Footer from '../global/Footer';
import { getPhotos } from '../../features/search/thunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  
  const dispatch = useAppDispatch();
  const { isLoading, response } = useAppSelector(state => state.searchReducer);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getPhotos(query));

    // Remove focus from input element
    const input = event.currentTarget.querySelector('input');
    input && input.blur();
  }
  
  return (
    <div className='search'>
      <Header />
      <div className='search__btn-mobile'>
        <Button className='secondary-btn'>MY PHOTOS 📷</Button>
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
        isLoading && <div className='search__photos__loading'></div>
      }
      <div className='search__photos'>
        {
          response &&
          response.results.map((photo) => (
            <img key={photo.id} src={photo.urls.small} 
              className='search__photos__image' alt={photo.description} />
          ))
        }
      </div>
      
      <Footer />
    </div>
  )
}

export default Search