import React from 'react'
import { Button } from '@mui/material';
import Header from '../global/Header';
import Footer from '../global/Footer';

const Search: React.FC = () => {

  const handleSubmit = () => {
    return
  }
  
  return (
    <div className='search'>
      <Header />
      <div className='search__btn-mobile'>
        <Button className='secondary-btn'>MY PHOTOS 📷</Button>
      </div>

      <form className='search__form'>
        <input placeholder='For example, beautiful beach' className='search__form__input' type="text" id="searchInput" />
        <Button onSubmit={handleSubmit} className='search__form__btn default-btn'>SEARCH</Button>
      </form>
      <p className='search__text'>You can search anything you want</p>
      
      <div className='search__photos'>
        
      </div>
      
      <Footer />
    </div>
  )
}

export default Search