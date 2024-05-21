import React, { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner';
import { ProdCard } from '../components/ProdCard';

export const HomePage = () => {
    const[loading,setLoading]= useState(false);
    const url= "https://fakestoreapi.com/products";
    const [products,setProducts]= useState([]);

    async function fetchData(){
        setLoading(true);
        try{
        const res= await fetch(url);
        const data= await res.json();
        console.log( data);
        setProducts(data);
        }
        catch{
            console.log( "error in fetching from api");
            setProducts([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className='products'>
        {
            loading? (<Spinner/>):
             (
                products.map( (prod) => {
                    return <ProdCard key={prod.id} prod={prod}/>
                })
             )
        }
    </div>
  )
}
