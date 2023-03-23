import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import { loadLikedPhotos, orderBy, searchByDescription } from '../../features/favorites/favoriteSlice';
import { useAppDispatch } from '../../app/hooks';

const FilterLikedPhotos: React.FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length > 0) {
      console.log(search)
      dispatch( searchByDescription(search.toLowerCase()) );
    } else {
      dispatch( loadLikedPhotos() );
    }
  }, [search, dispatch]);

  return (
    <div className='favorites__filter'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search by description' 
        className='favorites__filter__input' 
        type="text"
      />
      <div className='favorites__filter__order'>
        <p className='favorites__filter__order__text'>Order By:</p>
        <Button onClick={() => dispatch( orderBy('date_added') ) } className='secondary-btn'>Date added</Button>
        <Button onClick={() => dispatch( orderBy('width') )} className='secondary-btn'>Width</Button>
        <Button onClick={() => dispatch( orderBy('height') ) } className='secondary-btn'>Height</Button>
        <Button onClick={() => dispatch( orderBy('likes') ) } className='secondary-btn'>Likes</Button>
      </div>
    </div>
  )
}

export default FilterLikedPhotos