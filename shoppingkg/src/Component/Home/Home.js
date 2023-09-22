import React from 'react'
import { useSelector } from 'react-redux'
import Cartcomponent from '../All/Cartcomponent'
import { Gallery } from '../All/CrusellHome'




export default function Home() {

  const { data } = useSelector((state) => state.counter)


  return (
    <>
      <Gallery />
      <div className='lg:max-w-[80vw]  mx-auto py-8 '>
        <div className="grid 4xl:grid-cols-5 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 lg:gap-6 gap-2 px-2">
          {data.map((x,i) => (
            <Cartcomponent x={x} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}
