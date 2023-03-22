import React from 'react'
import { Button } from '@mui/material'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'><a href="/">PICTURE BOOK</a></h1>
      <div className='header__btn'>
        <Button href='/my-photos/' className='secondary-btn'>MY PHOTOS 📷</Button>
      </div>
    </header>
  )
}

export default Header