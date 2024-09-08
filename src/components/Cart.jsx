import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItems,
} from "../store/slices/counterSlice";

function Cart() {
  const items = useSelector((state) => state.items.item);
  const page = useSelector((state) => state.page.page);

  const dispatch = useDispatch();

  const handleDecrease = (index) => {
    if (items[index].quantity > 1) {
      dispatch(decrementQuantity({ id: index }));
    } else {
      dispatch(removeItems({ id: index }));
    }
  };

  const handleIncrease = (index) => {
    if (items[index].quantity < 20) {
      dispatch(incrementQuantity({ id: index }));
    }
  };

  return (
    <div className="right w-[40%] h-[80%] overflow-y-scroll overflow-x-hidden p-4 my-20 rounded-xl bg-gray-100 fixed right-0">
      <p className="text-lg font-bold">Cart</p>
      <div>
        {items.map((item, index) =>
          item.cart === true ? (
            <div
              key={index}
              className="flex flex-row justify-between h-[80px] w-full mb-4"
            >
              <img
                className="object-fit"
                src={item.image}
                alt=""
                width={"100px"}
              />
              <div className="flex flex-col justify-between">
                <p className="font-bold">{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <div className="flex w-[20%] justify-between items-center">
                <p
                  className="h-6 w-8 cursor-pointer text-white rounded-lg bg-[#CDB693] text-center hover:bg-[#85684C] transition-all 300ms ease-in-out"
                  onClick={() => handleDecrease(index)}
                >
                  -
                </p>
                <p>{item.quantity}</p>
                <p
                  className="h-6 w-8 cursor-pointer text-white rounded-lg bg-[#CDB693] text-center hover:bg-[#85684C] transition-all 300ms ease-in-out"
                  onClick={() => handleIncrease(index)}
                >
                  +
                </p>
              </div>
            </div>
          ) : null
        )}
      </div>
      <p className="font-bold text-center text-xl">
        Total: ₹{items.reduce((acc, item) => acc + item.tprice, 0)}
      </p>
      <div className="flex justify-center items-center">
        {
            page==0?<Link to={"/payment"}>
            <button className="text-center rounded-2xl border border-white bg-[#CDB693] p-2 text-white font-bold my-5">
              Proceed To Payment
            </button>
          </Link> : <Link to={"/"}><button className='text-center rounded-2xl border border-white bg-[#CDB693] p-2 text-white font-bold my-5'>Go back to Shopping</button></Link>

        }
        
      </div>
    </div>
  );
}

export default Cart;
