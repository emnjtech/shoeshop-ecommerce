import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useContext} from "react";
import CommerceContext from "./context/commerce-context";



function Checkout() {

  


  const { basket, removeFromCart,totalQty } = useContext(CommerceContext)
  


   const sum = basket.reduce((total, item) => {
     return total + (item.pricing * item.qty);
     
   }, 0);
  
  /* const totalQty = basket.reduce((totalQty, item) => {
   return totalQty + (item.qty)

  },0)
  console.log(totalQty) */

  
    return (
        <div className="w-[90%] md:flex md:justify-between items-center mx-auto"> 
    
          
           
        <div className='md:w-[60%] mb-3  w-full'>
       
            <h2 className="text-xl p-4 font-semibold">
            Your Cart ({totalQty})
            </h2>
         
          {

            basket.map(basketItem => <CheckoutProduct 
            key={basketItem.id}
            id={basketItem.id}
            title={basketItem.title}
            pricing={basketItem.pricing}
            qty={basketItem.qty}
            image={basketItem.image}
            size={basketItem.size}
              clickToRemove={() => removeFromCart(basketItem.id)}
             
          />
         
            )}
          
          </div>

        <div className='md:w-[35%] h-fit w-full  bg-slate-100 shadow-2xl my-4' >
          <Subtotal total={sum}/>
        </div>
        </div>
    )
}

export default Checkout
