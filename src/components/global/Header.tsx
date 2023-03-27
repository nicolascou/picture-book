import React from 'react'
import { Button } from '@mui/material'

interface HeaderProps {
  inFavorites?: boolean;
}

const Header: React.FC<HeaderProps> = ({ inFavorites=false }) => {
  return (
    <header className='header'>
      <h1 className='header__title'><a href="/picture-book/">PICTURE BOOK</a></h1>
      <div className='header__btn'>
        <Button href={inFavorites ? '/picture-book/search/' : '/picture-book/my-photos/'} 
        className='secondary-btn'>{inFavorites ? 'GO BACK TO SEARCH 🔎':  'MY PHOTOS 📷'}</Button>
      </div>
    </header>
  )
}

export default Header