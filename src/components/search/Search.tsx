import React, { useState, useEffect } from 'react'
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

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (query.length === 0) {
      dispatch(getPhotos(`photos/random?count=10`));
    } else {
      dispatch(getPhotos(`search/photos?page=1&query=${query}`));
    }

    // Remove focus from input element
    const input = event?.currentTarget.querySelector('input');
    input && input.blur();
  }

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line
  }, []);

  const [showTopButton, setShowTopButton] = useState(false);

  const handleNavigation = () => {
    if (window.scrollY > 400) {
      console.log('ho')
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='search'>
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
              <div className='search__photos__image-wrapper' key={id}>
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

        <button className={`returnToTop ${showTopButton ? '' : 'returnToTop--hidden'}`} 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <svg fill='black' height='30px' width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z" />
          </svg>
        </button>
        
      </div>
      <Footer />
    </>
  )
}

export default Search