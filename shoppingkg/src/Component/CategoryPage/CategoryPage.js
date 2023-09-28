import React from 'react'
import { useSelector } from 'react-redux'
import Cartcomponent from '../All/Cartcomponent'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { autoBatchEnhancer } from '@reduxjs/toolkit';


export default function CategoryPage() {
  const { data } = useSelector(state => state.counter)


  // /////////////reange narx
  const [value, setValue] = React.useState([1, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // /////////////reange narx
  // /////////////data filter in range
  const filterdata = data.filter((x)=>x.price>=value[0] && x.price<=value[1])
  // /////////////data filter in range
  return (
    <div className='lg:w-[80%] mx-auto py-5' >
      <h1 className='text-3xl'>Sarlavha</h1>
      <hr />
      <div className="grid grid-cols-6">
        <div className="aside col-span-2 py-5 px-2">
          <h2>Narxlar</h2>
          <div className="narxtext border border-grey0 rounded-lg grid grid-cols-2">
            <span className='py-3 pl-3 text-grey1'>{value[0]} $ dan</span>
            <span className='py-3 pl-3 text-grey1 border-l border-l-grey0'>{value[1]*10} $ gacha</span>
          </div>
          <div className="range p-3">
            <Box sx={{ width: autoBatchEnhancer }}>
              <Slider
                getAriaLabel={() => 'Narx range'}
                value={value}
                color='warning'
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2  col-span-4 gap-2 py-5 lg:h-[90vh] overflow-y-auto">
          {
            filterdata.map((x, i) => (
              <Cartcomponent x={x} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
