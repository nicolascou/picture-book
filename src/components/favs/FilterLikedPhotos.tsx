import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import { loadLikedPhotos, orderBy, searchByDescription } from '../../features/favorites/favoriteSlice';
import { useAppDispatch } from '../../app/hooks';

const FilterLikedPhotos: React.FC = () => {
  const [search, setSearch] = useState('');
  const [hideMenu, setHideMenu] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length > 0) {
      dispatch( searchByDescription(search.toLowerCase()) );
    } else {
      dispatch( loadLikedPhotos() );
    }
  }, [search, dispatch]);

  return (
    <div className='favorites__filter'>
      <div className='favorites__filter-mobile'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} 
          placeholder='Search by description' 
          className='favorites__filter__input' 
          type="text"
        />
        <button className='favorites__filter__hamburger' onClick={() => setHideMenu(!hideMenu)}>
          {
            hideMenu ?
            <svg fill='white' height="30px" width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" />
            </svg> :
            <svg fill='white' height="30px" width='30px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
            </svg>
          }
        </button>
      </div>
      <div className={`favorites__filter__order ${hideMenu ? 'favorites__filter__order--hidden' : ''}`}>
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