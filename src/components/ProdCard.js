import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {add,remove} from '../redux/slices/CartSlice'
import {toast} from 'react-hot-toast'

export const ProdCard = ({prod}) => {
    const {cart}= useSelector(state => state);
    const dispatch= useDispatch();
    const removeCart = ()=> {
        dispatch(remove(prod.id));
        toast.error('Removed from cart')
    }
    const addCart= ()=> {
        dispatch(add(prod));
        toast.success("Item added to cart")
    }
  return (
    <div className='card'>
        <p>{prod.title}</p>
        {/* <p>{prod.description}</p> */}
        <p> { prod.description.length < 15 ? prod.description : prod.description.substr(0,80)}</p>
        <img src={prod.image} height="150px" width="150px"></img>
        <span>${prod.price}</span>
        {
            cart.some( (p) => (p.id=== prod.id) )?
                (<button onClick={removeCart}>Remove Cart</button>):
                (<button onClick={addCart}>Add Cart</button>)
            
        }
  
    </div>
  )
}
