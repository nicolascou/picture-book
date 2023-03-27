import React, { useState, useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { Button } from '@mui/material';
import { getPhotos } from '../../features/search/thunk';

interface PaginationProps {
  query: string;
}

const Pagination: React.FC<PaginationProps> = ({ query }) => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  
  const getPhotosByPage = (num: number) => {
    setPage(num);
    if (query.length === 0) {
      dispatch( getPhotos('photos/random?count=10') )
      return;
    }
    dispatch( getPhotos(`search/photos?page=${num}&query=${query}`) );
  }

  const passPage = (num: number) => {
    if (page + num <= 0) return;
    setPage(page + num);
    if (query.length === 0) {
      dispatch( getPhotos('photos/random?count=10') )
      return;
    }
    dispatch( getPhotos(`search/photos?page=${page+num}&query=${query}`) );
  }

  useEffect(() => setPage(1), [query]);
  
  return (
    <>
      <p className='search__pagination-page'>{page}</p>
      <div className='search__pagination'>
        <div className='search__pagination__btn'>
          <Button onClick={() => passPage(-1)} className='secondary-btn'>&#60;---</Button>
        </div>
        <div className='search__pagination__btn small-hidden'>
          <Button onClick={() => getPhotosByPage(1)} className='secondary-btn'>1</Button>
        </div>
        <div className='search__pagination__btn small-hidden'>
          <Button onClick={() => getPhotosByPage(2)} className='secondary-btn'>2</Button>
        </div>
        <div className='search__pagination__btn small-hidden'>
          <Button onClick={() => getPhotosByPage(3)} className='secondary-btn'>3</Button>
        </div>
        <div className='search__pagination__btn'>
          <Button onClick={() => passPage(1)} className='secondary-btn'>---&#62;</Button>
        </div>
      </div>
    </>
  )
}

export default Pagination