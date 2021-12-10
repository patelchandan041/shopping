import React,{ useState } from 'react'
import './Product.css'
import firebase from 'firebase'
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router';

function Product({id, title, image, price,}) {
    const history  = useHistory()
    const [{basket},dispatch] = useStateValue()
    
 const addToCart = () => {
     
    dispatch({ type: "ADD_TO_BASKET", item: {
        id: id,
        title: title,
        image: image,
        price: price,
        
      },
    });
    }

  
 
    return (
        <div className="product">
        <img className="product__image" src={image} alt=""/>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                 </p>
                 <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
