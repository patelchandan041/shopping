import React from 'react'
import './CartProduct.css'
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price,hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="cartproduct">
              <img className='checkoutProduct__image' src={image} />

<div className='checkoutProduct__info'>
    <p className='checkoutProduct__title'>{title}</p>
    <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
    </p>
  
    {!hideButton && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
    )}
</div>
        </div>
    )
}

export default CartProduct
