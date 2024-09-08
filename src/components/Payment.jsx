import React, { useEffect } from 'react';
import Navbar from './navbar';
import { Link, Outlet } from 'react-router-dom';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/slices/pageSlice';



function Payment() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    const render = ()=>{
     dispatch(setPage({value : 1}))
    }
    render()
 })

  return (
    <><Navbar/>
    <div className='flex flex-row justify-start p-4 w-full'>
    
      <div className='left flex justify-evenly my-20 p-0 w-[50%] h-[100%] flex-col items-center content-between' style={{ marginBottom: '20px' }}>
       <div className='flex justify-between w-[50%]'>
         <div>
         <input type="radio" name="paymentMethod" id="COD" />
         <label htmlFor="COD">Cash on Delivery</label>
         </div>
         <div>
         <input type="radio" name="paymentMethod" id="Card" />
         <label htmlFor="Card">Credit Card</label>
         </div>
       </div>
       <div className='card-details w-[50%] shadow-xl flex flex-col my-10 border border-black rounded-xl p-4 bg-[#F6F6F4]'>
       <label htmlFor="card-number">Enter your card number:</label>
       <input type="text" name="card-number" id="card-number"  placeholder='Card Number'/>
       <label htmlFor="card-expiry">Enter your card's expiry date:</label>
       <input type="text" name="card-expiry" id="card-expiry"  placeholder='Expiry Date'/>
       <label htmlFor="card-cvv">Enter your CVV number:</label>
       <input type="text" name="card-cvv" id="card-cvv"  placeholder='CVV'/>

       </div>
       <div className='flex justify-center items-center'>
        <Link to={"/"}><button className='text-center rounded-2xl border border-white bg-[#CDB693] p-2 text-white font-bold my-5'>Confirm Payment</button></Link>

        </div>
      </div>

    <Cart/>
     
    </div>
    </>
  );
}

export default Payment;
