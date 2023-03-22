import React, {useEffect, useState} from 'react';

const img1 = require('../../img/bridge.jpg');
const img2 = require('../../img/mushrooms.jpg');
const img3 = require('../../img/dolphin.jpg');
const img4 = require('../../img/squirrel.jpg');
const img5 = require('../../img/sea.jpg');
const img6 = require('../../img/waterfall.jpg');

interface InfiniteCarouselProps {
  goTo: 'left' | 'right';
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ goTo }) => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [imageElements, setImageElements] = useState<JSX.Element[]>();

  useEffect(() => {
    let temp = images.map((img, idx) => (
      <img key={`carousel${idx}`} className='home__carousel-wrapper__carousel__image' src={images[idx]} alt={`carousel${idx}`} />
    )) 
    
    setImageElements(temp);
    setImagesLoaded(true);

    //eslint-disable-next-line
  }, []);
  
  
  return (
    <div className='home__carousel-wrapper'>
      <div className={`home__carousel-wrapper__carousel ${imagesLoaded ? `home__carousel-wrapper__carousel--animate-${goTo}` : ''}`}>
        {
          imageElements && imageElements.map((elt) => elt)
        }
        {
          imageElements && imageElements.map((elt) => elt)
        }
      </div>
    </div>
  )
}

export default InfiniteCarousel