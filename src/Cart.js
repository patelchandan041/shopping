import React from 'react'
import './Cart.css'
import CartProduct from './CartProduct'

import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal';

function Cart() {
    const [{ basket }] = useStateValue();
    console.log(basket)
    return (
        <div className='cart'>
          <div className="cart__left">
          {basket.map(item => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              
            />
          ))}
          </div>
         <div className="cart__right">
           <Subtotal />
         </div>
        </div>
    )
}

export default Cart
