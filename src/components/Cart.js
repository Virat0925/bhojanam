import React from 'react'
import { useSelector } from 'react-redux'
// import ItemList from './ItemList'

const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem)

    return (
      <div className='bg-gray-100'>
        <div className="w-6/12 m-auto bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 m-4 p-4">
            Your Cart
          </h1>

          <div>
            {cartItem.length === 0
              ? "Add item to your Cart"
              : cartItem.map((item) => (
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
        </div>
      </div>
    );
}

export default Cart