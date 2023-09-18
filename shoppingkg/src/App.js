import Spagetti, { DarkFun, LightFun } from "./spagetti/Spagetti";

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
  return (
    <div className="App  h-[100vh] bg-slate-100  flex justify-center items-center dark:bg-slate-900 ">
        <button onClick={darkmode} className="fixed top-0 left-0 p-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 dark:text-3xl text-3xl border dark:border-white border-slate-900 m-3  ">DarkMode</button>
     <h1 className=" w-[300px] h-[300px] bg-white text-4xl p-5 rounded-md dark:bg-slate-500">Salom dunyo</h1>
    </div>
  );
}

export default App;
