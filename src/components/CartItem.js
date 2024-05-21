import React from 'react'
import {useDispatch} from 'react-redux'
import {remove} from '../redux/slices/CartSlice'
import {toast} from 'react-hot-toast'

export const CartItem = ({item}) => {
    const dispatch= useDispatch();
    const deleteItem= ()=>{
        dispatch(remove(item.id));
        toast.error("succ removed");
    }
    
  return (
    <div>
        <p>{item.title}</p>
        <img src={item.image} height="200px" width="200px"></img>
        <p>${item.price}</p>
        <button onClick={deleteItem}>
            Delete
        </button>

    </div>
  )
}
