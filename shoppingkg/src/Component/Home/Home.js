import React from 'react'
import dataBase from '../../Data/base'



export default function Home() {

    


  return (
    <div>
        {dataBase.map((x)=>(
            <h1 key={x.id} >{x.title}</h1>
        ))}
    </div>
  )
}
