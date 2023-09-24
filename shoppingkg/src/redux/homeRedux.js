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
   
        ////////cartdata ga ham bildirish
        state.likedata.push(action.payload)
        localStorage.setItem('likedata',JSON.stringify(state.likedata))
        state.likedata = JSON.parse(localStorage.getItem('likedata'))
        toast.success("Like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
    },
    likechangeReset: (state, action) => {
        ////////cartdata ga ham bildirish
        state.likedata = state.likedata.filter((x)=>x.id !== action.payload)
        localStorage.setItem("likedata",JSON.stringify(state.likedata))
        toast.error("Delete like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
    },
    cartchange: (state, action) => {
      state.cartdata.push(action.payload)
      localStorage.setItem("cartdata",JSON.stringify(state.cartdata))
      state.cartdata = JSON.parse(localStorage.getItem("cartdata"))
      toast.success("Product add Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    },
    cartchangeReset: (state, action) => {
      state.cartdata = state.cartdata.filter(x=>x.id!==action.payload)
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
      console.log(action.payload);
      state.modalValue = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { categoryopenfun, likechange, modalchange,modalValuereducer,likechangeReset,cartchange,cartchangeReset} = counterSlice.actions

export default counterSlice.reducer