// src/store/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import item from '../../components/item';

const initialState = {item};

const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    incrementQuantity : (state,action)=>{
      const items = state.item.find((items)=> items.id === action.payload.id+1 )
      if(items){
   
        items.cart = true
        items.quantity++
        items.tprice = items.quantity*items.price
      }
          
    },
    decrementQuantity : (state,action)=>{
     
        const items = state.item.find((items)=> items.id === action.payload.id+1 )
        if(items){
       
          items.cart = true
          items.quantity--
          items.tprice = items.quantity*items.price
        }
    
  },
  removeItems : (state,action)=>{
 
      const items = state.item.find((items)=> items.id === action.payload.id+1 )
      if(items){
        items.tprice = 0
        items.cart = false
        items.quantity--
      }
  
  }

   
  },
});

export const { decrementQuantity,incrementQuantity,removeItems } = counterSlice.actions;
export default counterSlice.reducer;
