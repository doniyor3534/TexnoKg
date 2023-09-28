import React from 'react'
import { category } from '../navbar/Category'
import AliceCarousel from 'react-alice-carousel'
import { NavLink } from 'react-router-dom';

export default function Categorycarusel() {
    const responsive = {
        0: { items: 4 },
        568: { items: 5 },
        1024: { items: 6 },
    };
const data =  category.map((item, i) => {
    return <NavLink to={'/categorypage'} className="p-3  bg-white cursor-pointer border border-grey0 lg:gap-3 justify-center flex items-center m-2 rounded-lg text-xl shadow-sm shadow-grey1">
        <h1 className='text-green'>{item.icon}</h1>
        <h1 className='hidden lg:inline-block' >{item.nomi}</h1>
    </NavLink>
})
  

    return (
        <div className='flex justify-center lg:px-[10vw] px-2 lg:my-10 my-3'>
                <AliceCarousel className='lg:w-[80vw] w-[100vw] mx-auto' responsive={responsive}  mouseTracking items={data} renderPlayPauseButton={false} autoPlay={true} autoPlayInterval={1500} autoPlayControls={true}  infinite={true} />
        </div>
    )
}
