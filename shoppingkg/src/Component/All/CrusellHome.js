import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../img/banner1.avif'
import img2 from '../../img/banner2.jpg'
import img3 from '../../img/banner3.jpeg'
import img4 from '../../img/banner4.avif'
import img5 from '../../img/banner5.avif'
import img6 from '../../img/banner6.jpg'
import img7 from '../../img/banner7.jpg'

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
  <img src={img1} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img2} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img3} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img4} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img5} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img6} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
  <img src={img7} onDragStart={handleDragStart} role="presentation" alt='foto' className='cursor-pointer h-[200px]'/>,
];

export const Gallery = () => {
  return (
    <AliceCarousel responsive={responsive}  mouseTracking items={items} renderPlayPauseButton={false} autoPlay={true} autoPlayInterval={2000} autoPlayControls={true} infinite={true} />
  );
}
