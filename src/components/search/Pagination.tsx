import React, { useState } from 'react'
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
    dispatch( getPhotos(`search/photos?page=${page}&query=${query}`) );
  }

  const passPage = (num: number) => {
    setPage(page + num);
    dispatch( getPhotos(`search/photos?page=${page}&query=${query}`) );
  }
  
  return (
    <div className='search__pagination'>
      <div className='search__pagination__btn'>
        <Button onClick={() => passPage(-1)} className='secondary-btn'>&#60;---</Button>
      </div>
      <div className='search__pagination__btn'>
        <Button onClick={() => getPhotosByPage(1)} className='secondary-btn'>1</Button>
      </div>
      <div className='search__pagination__btn'>
        <Button onClick={() => getPhotosByPage(2)} className='secondary-btn'>2</Button>
      </div>
      <div className='search__pagination__btn'>
        <Button onClick={() => getPhotosByPage(3)} className='secondary-btn'>3</Button>
      </div>
      <div className='search__pagination__btn'>
        <Button onClick={() => passPage(1)} className='secondary-btn'>---&#62;</Button>
      </div>
    </div>
  )
}

export default Pagination