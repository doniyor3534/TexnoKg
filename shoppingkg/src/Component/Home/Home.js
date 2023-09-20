import React from 'react'
import { useSelector } from 'react-redux'
import Stars from '../Stars';
import { FaShoppingCart } from 'react-icons/fa';
import {  AiOutlineHeart } from 'react-icons/ai';



export default function Home() {

  const { data } = useSelector((state) => state.counter)

  console.log(data);
  return (
    <div className='lg:max-w-[80vw]  mx-auto py-8 grid 4xl:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 lg:gap-6 gap-2 px-2'>
      {data.map((x) => (
        <div key={x.id} className="border relative bg-bg2  rounded-lg px-2 py-5 justify-center items-center grid grid-cols-1">
          <img src={x.image} alt="" className='lg:h-[150px] h-[100px] w-auto mx-auto mix-blend-multiply ' />
          <h5 className='text-grey1 lg:my-3 text-sm lg:text-xl'>{x.title.slice(0, 20)}</h5>
          {<Stars />}
          <span className='bg-slate-200 w-[max-content] rounded-lg px-2 lg:my-3 my-1'>{parseInt(x.price / 12 * 10) / 10}$ dan / 12oy</span>
          <div className="flex justify-between">
            <h3 className=' my-1 text-2xl'>{x.price}$ </h3>
            <button className='border border-yellow rounded-lg  hover:text-yellow'><FaShoppingCart /></button>
            <button className='border absolute top-1 right-1 bg-bg2 border-bg1 rounded-full lg:text-2xl py-2  hover:text-red-600'><AiOutlineHeart /></button>
          </div>
        </div>
      ))}
    </div>
  )
}
