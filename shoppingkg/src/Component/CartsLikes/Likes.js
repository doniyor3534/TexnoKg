import React from 'react'
import { cartchange, likechangeReset } from '../../redux/homeRedux'
import Stars from '../Stars'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import nodata from '../../img/nodata.png'

export default function Likes() {
  const { likedata } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  // //////////////////////reset like modalll
  const resetLikefun = (value) => {
    dispatch(likechangeReset(value.id))
  }
  return (
    <div>
      {
        likedata.length > 0 ? likedata.map((x, i) => (
          <div key={x.id} className="border relative my-1 bg-bg2  rounded-lg px-2 py-5 justify-center items-center grid grid-cols-1">
            <img src={x.image} alt="" className='lg:h-[150px] h-[100px] w-auto mx-auto mix-blend-multiply ' />
            <h5 className='text-grey1 lg:my-3 text-sm lg:text-xl'>{x.title ? x.title.slice(0, 20) : ''}</h5>
            {<Stars />}
            <span className='bg-slate-200 w-[max-content] rounded-lg px-2 lg:my-3 my-1'>{parseInt(x.price / 12 * 10) / 10}$ dan / 12oy</span>
            <div className="flex justify-between">
              <h3 className=' my-1 text-2xl'>{x.price}$ </h3>
              <button onClick={() => resetLikefun(x)} className={`   border absolute top-4 right-4 bg-bg2 border-bg1 rounded-full lg:text-2xl py-2  hover:text-red-600`}>{<MdDeleteSweep className='text-red-500' />}</button>
              <button onClick={() => dispatch(cartchange(x))} className='border border-yellow rounded-lg px-6 bg-yellow  hover:text-green'><FaShoppingCart /></button>
            </div>
          </div>
        ))
          : <div className='flex items-center justify-center'>
            <img src={nodata} alt="" className='lg:w-[50vw] w-[100vw]' />
          </div>
      }
    </div>
  )
}

