import React from 'react'
import { useSelector } from 'react-redux'
import Cartcomponent from '../All/Cartcomponent'
import { Gallery } from '../All/CrusellHome'
import Categorycarusel from './Categorycarusel'
import nodata from '../../img/nodata.png'



export default function Home() {

  const { data, search } = useSelector((state) => state.counter)
 const datafilter = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <Gallery />
      <div className="categorycarusel">
        <Categorycarusel />
      </div>
      <div className='lg:max-w-[80vw]  mx-auto py-8 '>
        {
          data.length > 0  && datafilter.length > 0?
            <div className="grid 4xl:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 lg:gap-6 gap-2 px-2">
              {/* ///////search ///////////////////// */}
              {search ? datafilter.map((x, i) => (
                <Cartcomponent x={x} key={i} />
              ))
                : data.map((x, i) => (
                  <Cartcomponent x={x} key={i} />
                ))}
            </div>
            :<div className='flex items-center justify-center'>
                 <img src={nodata} alt=""className='lg:w-[50vw] w-[100vw]' />
            </div>
         }
      </div>
    </>
  )
}
