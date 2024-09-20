import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
// import ItemList from './ItemList'
import bgImage from "../utils/images/bg-image.jpg";
import { Link } from 'react-router-dom';

const Cart = () => {

    const dispatch = useDispatch(clearCart)  

    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem)
    
    

    return (
      <div className=" w-6/12 m-auto min-h-screen ">
        <div className="">
          <div>
            {cartItem.length === 0 ? (
              <div className="mt-16 flex flex-col items-center justify-center">
                <img className="" alt='' src={bgImage}></img>
                <h1 className="text-center text-2xl font-bold text-gray-600 mt-2 p-2 ">
                  Your cart is empty
                </h1>
                <h3 className="text-center text-sm font-light text-gray-800 ">
                  Go to home page and add some dishes
                </h3>
                <h2 className="text-center text-lg font-mono text-white border bg-[#FE5005] m-8 px-4 py-2 rounded-lg">
                  <Link to="/"> SEE RESTAURANT NEAR YOU</Link>
                </h2>
              </div>
            ) : (
              <div>
                <h1 className="text-center text-2xl font-bold text-gray-800 m-4 p-4">
                  Your Cart
                </h1>
                <div className=" flex items-center justify-center m-4">
                  <button
                    className="p-2 bg-[#60B245]  rounded-lg border-2 text-2xl font-semibold text-gray-100"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear your cart
                  </button>
                </div>

                {cartItem.map((item) => (
                  <div className="p-4 m-2  border-gray-200 border-b-2 text-left flex justify-between">
                    {item.card.info.name}
                    <span className="text-[#60B245] font-semibold">
                      ₹
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Cart