import React from 'react'
import Stars from '../Stars'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartchange, likechange, modalValuereducer } from '../../redux/homeRedux'
import { FcLike } from 'react-icons/fc'

export default function Cartcomponent({ x }) {
    const { data } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // //////////////like bosiladi ikkichi bosilganda modal ochiladi
    const modalvaluefun = (value) => {
        dispatch(modalValuereducer(data.filter(x => x.like === true)))
        dispatch(likechange(value))

    }
    //////////////cartchange
    const cartchangefun = (value) => {
        dispatch(cartchange(value))
    }
    return (
        <div key={x.id} className="border relative bg-bg2  rounded-lg px-2 py-5 justify-center items-center grid grid-cols-1">
            <img src={x.image} alt="" className='lg:h-[150px] h-[100px] w-auto mx-auto mix-blend-multiply ' />
            <h5 className='text-grey1 lg:my-3 text-sm lg:text-xl'>{x.title ? x.title.slice(0, 20) : ''}</h5>
            {<Stars />}
            <span className='bg-slate-200 w-[max-content] rounded-lg px-2 lg:my-3 my-1'>{parseInt(x.price / 12 * 10) / 10}$ dan / 12oy</span>
            <div className="flex justify-between">
                <h3 className=' my-1 text-2xl'>{x.price}$ </h3>
                <button onClick={() => modalvaluefun(x)} className={`   border absolute top-1 right-1 bg-bg2 border-bg1 rounded-full lg:text-2xl py-2  hover:text-red-600`}>{x.like ? <FcLike /> : <AiOutlineHeart />}</button>
                <button onClick={() => cartchangefun(x)} className='border border-yellow bg-yellow rounded-lg  px-6 '><FaShoppingCart /></button>
            </div>
        </div>
    )
}
