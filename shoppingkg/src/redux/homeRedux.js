import { createSlice } from '@reduxjs/toolkit'
import datafake from '../Data/basefekapi.json'
import { toast } from 'react-toastify'

const initialState = {
  categoryopen: false,
  data: datafake,
  likedata: JSON.parse(localStorage.getItem('likedata')) || [],
  cartdata:  JSON.parse(localStorage.getItem('cartdata')) || [],
  modalopen: false,
  modalValue:[],
  search:'',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    categoryopenfun: (state) => {
      if (state.categoryopen) {
        state.categoryopen = false
      } else {
        state.categoryopen = true
      }
    },
    likechange: (state, action) => {
        let likeopen = state.likedata.findIndex((x)=>x.id===action.payload.id)
       if(likeopen === -1){
        state.likedata.push(action.payload)
        localStorage.setItem('likedata',JSON.stringify(state.likedata))
        state.likedata = JSON.parse(localStorage.getItem('likedata'))
        toast.success("Like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
       }else{
        toast.warning("Like yes old !", {
          position: toast.POSITION.TOP_CENTER
        });
       }
  
    },
    likechangeReset: (state, action) => {
        state.likedata = state.likedata.filter((x)=>x.id !== action.payload)
        localStorage.setItem("likedata",JSON.stringify(state.likedata))
        state.modalValue = JSON.parse(localStorage.getItem("likedata"))
        toast.error("Delete like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
        if(state.likedata.length ===0){
           state.modalopen = false
        }
    },
    cartchange: (state, action) => {
      let cartopen = state.cartdata.findIndex((x)=>x.id===action.payload.id)
      if(cartopen === -1){
        state.cartdata.push(action.payload)
        localStorage.setItem("cartdata",JSON.stringify(state.cartdata))
        state.cartdata = JSON.parse(localStorage.getItem("cartdata"))
        toast.success("Product add Cart to Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
      }else{
        toast.warning("cart to yes old !", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    },
    cartchangeReset: (state, action) => {
      localStorage.setItem("cartdata",JSON.stringify(state.cartdata.filter(x=>x.id!==action.payload)))
      state.cartdata = JSON.parse(localStorage.getItem("cartdata"))
      toast.error("Delete product cart  Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
  },
    modalchange: (state) => {
      if (state.modalopen) {
        state.modalopen = false
      } else {
        state.modalopen = true
      }
    },
    modalValuereducer: (state,action) => {
      state.modalValue = action.payload
    },
    cartcounincriment:(state,action)=>{
      localStorage.setItem("cartdata",JSON.stringify(state.cartdata.map(x=>x.id===action.payload?{...x,count:x.count+1}:x)))
      state.cartdata = JSON.parse(localStorage.getItem('cartdata'))
    },
    cartcoundecriment:(state,action)=>{
      localStorage.setItem("cartdata",JSON.stringify(state.cartdata.map(x=>x.id===action.payload?{...x,count:(x.count > 1 ? x.count-1:1)}:x)))
      state.cartdata = JSON.parse(localStorage.getItem('cartdata'))
    },
    searchChange:(state,action)=>{
        state.search = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { categoryopenfun, likechange, modalchange,modalValuereducer,likechangeReset,cartchange,cartchangeReset,cartcounincriment,cartcoundecriment,searchChange} = counterSlice.actions

export default counterSlice.reducer