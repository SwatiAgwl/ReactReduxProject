import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
import { CartItem } from '../components/CartItem';
import { useState } from 'react';

export const CartPage = () => {
    const {cart}= useSelector(state => state);
    const [totalAmount, setTotalAmount] = useState(0);
    //forgot to use useEffect too many renders error coming bcs we only need to recompute tot amt only if there is change in cart
    useEffect(()=>{
        setTotalAmount( cart.reduce( (acc,curr)=> acc+=curr.price,0 ));
    },[cart]);
    
  return (
    <div>
        <div>
          {
            cart.length > 0 ? 
            ( cart.map( item => {
                return <CartItem key={item.id} item= {item}/>
            })) : (<p>Cart is empty</p>)
          }
        </div>
        <br/>
        <div>
            Cart Summary
            <p>Total Amount: ${totalAmount} </p>
            
        </div>
    </div>
  )
}
