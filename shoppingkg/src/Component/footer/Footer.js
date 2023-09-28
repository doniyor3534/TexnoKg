import React from 'react'
import logo from '../../img/logo4.png';
import { FaTelegram } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import gogleplay from '../../img/gogleplay.svg'
import appstory from '../../img/appstory.svg'

export default function Footer() {
    return (
        <div className= ' grid grid-cols-4 bg-dark lg:px-[10%] px-2 lg:py-10 py-5 pb-[70px] text-grey0 '>
            <ul className='flex flex-col gap-3'>
                <a href="."><img src={logo} alt="" className='w-[100px] lg:w-[200px]' /></a>
                <span>savolingiz bolsa yo'llang</span>
                <a href="+998991101197" className='text-2xl'>+99899 110 11 97</a>
                <div className="social flex gap-3">
                    <a className=' cursor-pointer lg:text-4xl text-blue-500 text-2xl' href="https://t.me/DoniyorbekTursunov35341"><FaTelegram /></a>
                    <a className=' cursor-pointer lg:text-4xl text-blue-500 text-2xl' href="https://t.me/DoniyorbekTursunov35341"><BsFacebook /></a>
                    <a className=' cursor-pointer lg:text-4xl text-fuchsia-500 text-2xl' href="https://instagram.com/doniyor35341"><img className='w-[25px] lg:w-[40px]' src="https://static.vecteezy.com/system/resources/previews/024/170/870/original/instagram-icon-logo-symbol-free-png.png" alt="" /></a>
                    <a className=' cursor-pointer lg:text-4xl text-blue-500 text-2xl' href="https://t.me/DoniyorbekTursunov35341"><img className='w-[25px] lg:w-[40px]' src="https://i0.wp.com/www.worldmissioncentre.com/wp-content/uploads/icons/youtube-icon-flat-red-play-button-logo-vector.png?fit=800%2C800&ssl=1&w=640" alt="" /></a>
                </div>
                <div className="flex gap-3">
                    <a className=' cursor-pointer lg:text-4xl text-fuchsia-500 text-2xl' href="https://t.me/DoniyorbekTursunov35341"><img className='w-[85px] lg:w-[150px]' src={gogleplay} alt="" /></a>
                    <a className=' cursor-pointer lg:text-4xl text-fuchsia-500 text-2xl' href="https://t.me/DoniyorbekTursunov35341"><img className='w-[85px] lg:w-[150px]' src={appstory} alt="" /></a>
                </div>
            </ul>
            <ul className='flex flex-col gap-3'>
                <h2 className='text-2xl'>Kompaniya</h2>
                <span>Yuridik shaxslar uchun </span>
                <span>Biz haqimizda</span>
                <span>Yangiliklar va bloglar </span>
                <span>Kerakli ko'rsatmalar </span>
            </ul>
            <ul className='flex flex-col gap-3'>
                <h2 className='text-2xl'>Ma'lumot</h2>
                <span>Bepul yetkazib berish</span>
                <span>Bonus tizimi</span>
                <span>Shaxsiy kabinet </span>
                <span>Aloqa raqamlari </span>
            </ul>
            <ul className='flex flex-col gap-3'>
                <h2 className='text-2xl'>Haridorga yordam</h2>
                <span>Muddatli to'lovga sotib olish</span>
                <span>Maxsulotni qaytarish</span>
                <span>Maxsulot uchun kafolat</span>
                <span>Ko'p soraladigan savollar</span>
            </ul>
        </div>
    )
}
