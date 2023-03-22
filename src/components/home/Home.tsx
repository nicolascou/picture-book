import React from 'react'
import Header from '../global/Header';
import Footer from '../global/Footer';
import { Button } from '@mui/material';
import InfiniteCarousel from './InfiniteCarousel';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <div className='home__text-mobile'>
          <p className='home__text-mobile__text'>OVER +2 MILLION QUALITY PHOTOS</p>
          <p className='home__text-mobile__text'>ALL PHOTOS ARE FREE TO USE</p>
        </div>

        <InfiniteCarousel goTo='right' />

        <div className='home__start-btn'>
          <p className='home__text-desktop'>OVER +2 MILLION QUALITY PHOTOS</p>
          <Button href='search/' className='default-btn'>START SEARCHING</Button>
          <p className='home__text-desktop'>ALL PHOTOS ARE FREE TO USE</p>
        </div>

        <InfiniteCarousel goTo='left' mobileHide={true} />

        <div className='home__saved-mobile'>
          <p className='home__saved-mobile__text'>OR SEE YOUR SAVED PHOTOS:</p>
          <Button className='secondary-btn'>MY PHOTOS 📷</Button>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Home