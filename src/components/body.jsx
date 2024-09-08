import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItems } from '../store/slices/counterSlice';
import Cart from './Cart';
import { setPage } from '../store/slices/pageSlice';



function Body() {
  const items = useSelector((state) => state.items.item);
  const dispatch = useDispatch()
  useEffect(()=>{
     const render = ()=>{
      dispatch(setPage({value : 0}))
     }
     render()
  })
 

  const handleIncrease = (index) => {
    if (items[index].quantity < 20) {
      dispatch(incrementQuantity({id:index}))
    }
  };


  return (
  
    <div className='flex flex-row justify-start p-4 w-full'>
      <div className='left flex justify-evenly my-20 p-0 w-[50%] h-[100%] flex-row flex-wrap content-between' style={{ marginBottom: '20px' }}>
        {items.map((map, index) => (
          <div
            key={index}
            className='card flex-col justify-between w-[40%] rounded-xl border mb-4 overflow-hidden shadow-lg transition-all duration-300'
          >
            <div className='h-[200px] w-[100%] rounded-t-xl overflow-hidden'>
              <img className='object-cover h-full w-full' src={map.image} alt="Logo" />
            </div>
            <div className='bg-[#CDB693] w-full flex flex-col items-center p-4 rounded-bl-xl rounded-br-xl h-[50%]'>
              <p className=' font-bold'>{map.name}</p>
              <p>₹{map.price}</p>
              <button
                className='rounded-3xl border border-black p-1 hover:bg-[#85684C] transition-all 300ms ease-in-out'
                onClick={() => {
                          handleIncrease(index)
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart/>

     
    </div>
  );
}

export default Body;
