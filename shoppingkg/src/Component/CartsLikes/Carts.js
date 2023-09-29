import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Stars from '../Stars'
import { cartchangeReset, cartcoundecriment, cartcounincriment, likechange, modalValuereducer } from '../../redux/homeRedux'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FcLike } from 'react-icons/fc'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'
import nodata from '../../img/nodata.png'



export default function Carts() {
  
  const { cartdata, data } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  // //////////////like bosiladi ikkichi bosilganda modal ochiladi
  const modalvaluefun = (value) => {
    dispatch(modalValuereducer(data.filter(x => x.cart === true)))
    dispatch(likechange(value))

  }
 
  //////////////cartchange
  const cartchangefunreset = (id) => {
    dispatch(cartchangeReset(id))
  }
  // /////////cartCount incriment
  const cartcountincrFun=(value)=>{
     dispatch(cartcounincriment(value.id))
  }
  // /////////cartCount decriment
  const cartcountdecrFun=(value)=>{
     dispatch(cartcoundecriment(value.id))
  }



  return (
    <div className='grid  min-h-[100vh] lg:grid-cols-3 grid-cols-1 gap-2 my-5  mx-auto w-[100vw] lg:w-[80vw] justify-center '>
      <div className="col-span-2 max-h-[100vh] overflow-y-auto  ">
        {
         cartdata.length>0? cartdata.map((x, i) => (
            <div key={x.id} className="border my-1 relative mx-auto  bg-bg2  rounded-lg px-2 py-5 justify-center items-center grid grid-cols-2">
              <img src={x.image} alt="" className='lg:h-[350px] h-[100px] w-auto mx-auto mix-blend-multiply ' />
              <div className="flex justify-around flex-col gap-3">
                <h5 className='text-grey1 lg:my-3 text-sm lg:text-xl'>{x.title ? x.title.slice(0, 20) : ''}</h5>
                {<Stars />}
                <span className='bg-slate-200 w-[max-content] rounded-lg px-2 lg:my-3 my-1'>{parseInt(x.price / 12 * 10) / 10}$ dan / 12oy</span>
                <div className="flex justify-between">
                  <div className="">
                    <h3 className=' my-1 text-xl line-through text-grey1 italic'>{x.price}$ </h3>
                    <h3 className=' my-1 text-xl'>{parseInt((x.price - (x.price / 100 * x.chegirma))*10)/10}$ </h3>
                  </div>
                  <button onClick={() => modalvaluefun(x)} className={`   border absolute top-1 right-1 bg-bg2 border-bg1 rounded-full lg:text-2xl py-2  hover:text-red-600`}>{x.like ? <FcLike /> : <AiOutlineHeart />}</button>
                  <button onClick={() => cartchangefunreset(x.id)} className='border  bg-bg1 text-2xl rounded-lg  px-6 h-10 '><RiDeleteBin6Line /></button>
                </div>
                <div className="countgroup flex py-2 gap-2 w-[max-content] bg-yellow lg:px-4 px-2">
                   <button onClick={()=>cartcountdecrFun(x)} className='bg-bg2 lg:px-4 lg:text-xl text-sm text-grey0'><FaMinus/></button>
                  <h1 className='text-xl lg:text-2xl px-2 '>{x.count}</h1>
                   <button onClick={()=>cartcountincrFun(x)} className='bg-bg2 lg:px-4 lg:text-xl text-sm'><FaPlus/></button>
                </div>
                <h1 className='text-2xl italic'>Total : {parseInt(x.count * (x.price - (x.price / 100 * x.chegirma))*10)/10} $</h1>
              </div>
            </div>
          ))
          :<div className='flex items-center justify-center'>
          <img src={nodata} alt=""className='lg:w-[50vw] w-[100vw]' />
     </div>
        }
      </div>
      <div className="sidebar">
        <div className="buyurtma  border rounded-lg p-4 bg-bg2 h-[max-content]">
          <h1 className='text-4xl'>Savat</h1>
          <h4 className='text-2xl my-3 text-grey0'><span className='underline text-black'>{cartdata.length}</span> ta mahsulot narxi <span className='underline text-black'>{cartdata?parseInt(cartdata.reduce((a,b)=>a+(b.count*b.price),0)*10)/10:0}$</span></h4>
          <button className='w-[100%] p-4 text-xl cursor-pointer bg-yellow '>Buyurtma berish</button>
        </div>
        <div className="buyurtma my-3 border rounded-lg p-4 bg-bg2 h-[max-content]">
          <h4 className='text-2xl bg-bg1 px-4 my-3'><span className='underline'>{cartdata?(parseInt(cartdata.reduce((a,b)=>a+(b.count*b.price),0)/12*10)/10):0}$</span> dan 12/oyga </h4>
          <button className='w-[100%] p-4 text-xl cursor-pointer bg-grey1 text-white '>Muddatli to'lov</button>
        </div>
      </div>
    </div>
  )
}














