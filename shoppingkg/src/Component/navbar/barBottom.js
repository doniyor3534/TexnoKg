import React from 'react'
import { BsBagHeartFill, BsPersonFill } from 'react-icons/bs'
import { RiMenuSearchLine } from 'react-icons/ri'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { categoryopenfun } from '../../redux/homeRedux'
import { useDispatch } from 'react-redux'

export default function BarBottom() {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="fixed bottom-0 w-[100vw] py-3 bg-bg1 dark:bg-dark dark:text-light lg:hidden btngroup flex justify-around gap-3">
                <NavLink to={'/'} className='border border-yellow rounded-lg p-2 '> <AiFillHome className=' text-xl' /></NavLink>
                <button onClick={()=>dispatch(categoryopenfun())} className='border border-yellow rounded-lg p-2 '> <RiMenuSearchLine className=' text-xl' /></button>
                <NavLink to={'/loginlogout'} className='border border-yellow rounded-lg p-2 '> <BsPersonFill className=' text-xl' /></NavLink>
                <NavLink to={'/like'} className='border border-yellow rounded-lg relative p-2'> <span className='absolute top-[-15px] right-[-5px] bg-yellow px-2 rounded-full '>{2}</span> <BsBagHeartFill className=' text-xl' /></NavLink>
                <NavLink to={'/cart'} className='border border-yellow rounded-lg relative p-2'><span className='absolute top-[-15px] right-[-5px] bg-yellow px-2 rounded-full  '>{1}</span><FaShoppingCart className=' text-xl' /></NavLink>
            </div>
        </div>
    )
}
