import React, { useState } from 'react'
import SeletLangfun from './SelectLang'
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import  { DarkFun, LightFun } from "../../spagetti/Spagetti";
import logo from './logo4.png'

export default function Header() {
    const [ul, setul] = useState(false)
    const [dark, setDark] = useState(localStorage.theme)
    // ////////////////DarkMode 
    const darkmode = () => {
        if (localStorage.theme !== 'dark') {
            DarkFun()
            setDark('dark')
        } else {
            LightFun()
            setDark('light')
        }
    }

    // ////////////////
    return (
        <div className="bg-dark  ">
            <div className="header  2xl:px-[10%] px-3 mx-auto flex items-center justify-between py-2 lg:text-xl text-grey0 relative ">
                <button className=' border border-grey1 px-3 py-1 rounded-lg' onClick={() => setul(!ul)} >biz haqimizda</button>
                <ul className={`${ul ? "ul" : ''} h-0 opacity-0  z-[-10]  flex items-start flex-col gap-3 absolute text-grey1 top-[100%] bg-light  p-10`}>
                    <li className='hover:text-grey0 hover:underline cursor-pointer'>Namangan</li>
                    <li className='hover:text-grey0 hover:underline cursor-pointer'>Bizning do'konlarimiz</li>
                    <li className='hover:text-grey0 hover:underline cursor-pointer'>Muddatli to'lovga sotib olish</li>
                    <li className='hover:text-grey0 hover:underline cursor-pointer'>To'lov usullari</li>
                    <li className='hover:text-grey0 hover:underline cursor-pointer'>                    <a href="+998991101197" className='hover:text-grey1'> Aloqa markazi :+99871 209 99 44</a>
                    </li>
                    <div className="flex items-center justify-center gap-3 lg:hidden ">
                        {/* <button className='border border-grey0 p-2 rounded-lg bg-light' onClick={darkmode} >{dark === 'dark' ? <MdDarkMode /> : <MdLightMode />}</button> */}
                        <SeletLangfun />
                    </div>
                </ul>
                <a href="." className='font-medium lg:hidden   text-light text-3xl dark:text-light'><img src={logo} alt="" className='w-28' /></a>
                <div className="lg:flex items-center justify-center gap-3 hidden  ">
                    {/* <button className='border border-grey0 p-2 rounded-lg bg-light' onClick={darkmode} >{dark === 'dark' ? <MdDarkMode /> : <MdLightMode />}</button> */}
                    <SeletLangfun />
                </div>
            </div>
        </div>
    )
}
