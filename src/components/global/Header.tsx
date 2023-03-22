import React from 'react'
import { Button } from '@mui/material'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>PICTURE BOOK</h1>
      <div className='header__btn'>
        <Button className='secondary-btn'>MY PHOTOS 📷</Button>
      </div>
    </header>
  )
}

export default Header