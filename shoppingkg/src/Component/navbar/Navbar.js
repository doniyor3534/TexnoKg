import React from 'react'
import Header from './Header'
import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaMicrophone, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { BsPersonFill, BsBagHeartFill } from 'react-icons/bs'
import Category from './Category'
import { useDispatch } from 'react-redux'
import { categoryopenfun } from '../../redux/homeRedux'
import { NavLink } from 'react-router-dom'
import logo from './logo4.png'


export default function Navbar() {

const dispatch = useDispatch()

    return (
        <>
            <Header />
            <Disclosure as="nav" className="bg-bg1 border-b  dark:bg-dark dark:text-light py-2 ">
                <nav className='lg:max-w-[80vw] mx-auto py-2 flex items-center relative '>
                    <a href="." className=' hidden lg:block font-black text-3xl dark:text-light'><img src={logo} alt="" className='w-32' /></a>
                    <button onClick={()=>dispatch(categoryopenfun())}  className='text-xl flex items-center    px-2 bg-yellow ml-3 gap-2 rounded-lg'><GiHamburgerMenu /> <span className='hidden lg:block' >Category</span> </button>
                    <div className="inputgroup flex mx-4 py-2 px-3 item-center rounded-lg  border border-yellow  grow  ">
                        <input type="search" placeholder='Qidirish...' className='xl:w-[90%] w-[80%] px-3 bg-transparent outline-none ' />
                        <div className="xl:w-[20%] w-[20%] flex item-center justify-end text-grey0 text-2xl gap-2">
                            <FaMicrophone className='cursor-pointer hover:text-red-700' />
                            <div className="border"></div>
                            <FaSearch className='cursor-pointer text-yellow' />
                        </div>
                    </div>
                    <div className="hidden  btngroup lg:flex gap-3">
                        <NavLink to={'/loginlogout'} className='border rounded-lg p-2 '> <BsPersonFill className=' text-xl' /></NavLink>
                        <NavLink to={'/like'} className='border rounded-lg relative p-2'> <span className='absolute top-[-15px] right-[-5px] bg-yellow px-2 rounded-full '>{2}</span> <BsBagHeartFill className=' text-xl' /></NavLink>
                        <NavLink to={'/cart'} className='border rounded-lg relative p-2'><span className='absolute top-[-15px] right-[-5px] bg-yellow px-2 rounded-full  '>{1}</span><FaShoppingCart  className=' text-xl'/></NavLink>
                    </div>
                    {/* ///////////category */}
                    <Category  />
                </nav>
            </Disclosure>
        </>
    )
}
