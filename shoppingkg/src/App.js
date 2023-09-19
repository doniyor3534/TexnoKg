import { useTranslation } from "react-i18next";
import Spagetti, { DarkFun, LightFun } from "./spagetti/Spagetti";
import i18next from "i18next";
import enimg from './img/enimg.png'
import SeletLangfun from "./Component/navbar/SelectLang";

import axios from 'axios';
import Home from "./Component/Home/Home";


function App() {
  // ////////////////DarkMode 
  const darkmode=()=>{
     if(localStorage.theme!=='dark'){
        DarkFun()
     }else{
        LightFun()
     }
  }
  // ////////////////
  // ////////////////i18-next translate
  const { t } = useTranslation();
  //////chang language
  const language=(e)=>{
     i18next.changeLanguage(e.target.name)
  }
  // ////////////////i18-next translate
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>console.log(json))
  return (
    <div className="App  h-[100vh] bg-light  flex justify-center items-center dark:bg-dark ">
        <button onClick={darkmode} className="fixed top-0 left-0 p-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 dark:text-3xl text-3xl border dark:border-white border-slate-900 m-3  ">DarkMode</button>
     <div className=" w-[300px] h-[300px] bg-white text-4xl p-5 rounded-md dark:bg-slate-500">
         {/* <button onClick={language} name="en" className="border border-slate-800 m-2 p-2 rounded ">en</button>
         <button onClick={language} name="ru"  className="border border-slate-800 m-2 p-2 rounded ">ru</button>
         <button onClick={language} name="uz"  className="border border-slate-800 m-2 p-2 rounded ">uz</button> */}
         <SeletLangfun/>
         <h1>{t('salom')}</h1>
         <Home/>
     </div>
    </div>
  );
}

export default App;
