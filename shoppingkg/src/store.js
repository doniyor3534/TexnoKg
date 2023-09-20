import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/homeRedux'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
    
})