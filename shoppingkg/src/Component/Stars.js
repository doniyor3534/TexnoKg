import React from 'react'
import {LiaStarSolid} from 'react-icons/lia'

export default function Stars() {
    const starfun=[1,2,3,4,5]
  return (
    <div className='flex gap-1' >{starfun.map((x,i)=>(<LiaStarSolid key={i} className={i<3?"text-yellow":'text-grey0'} />))}</div>
  )
}
