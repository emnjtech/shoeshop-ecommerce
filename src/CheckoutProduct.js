import React from 'react'

import {useContext} from 'react'
import CommerceContext from './context/commerce-context'
import ReactImageZoom from 'react-image-zoom';
import { useState } from 'react';

function CheckoutProduct({  id, title, image, pricing, clickToRemove, qty, size }) {

    const props = { width: 350, height: 300, zoomWidth: 300, img: image, zoomPosition: "original" };
    const { incQty, decQty } = useContext(CommerceContext)
    const [shoeSize, setShoeSize] = useState(size)
console.log(size)
    function increment() {
        if (qty >= 1) {
            incQty(id)
        }
    }

    function decrement() {
        if (qty > 1) {
            decQty(id)
        }
        else {
            alert ("Quantity of product can not be less that 1")
        }
    }
  
    return (
       
            
        <div className=' md:flex justify-between shadow-2xl p-7' >
                
              
               
            <div className='md:w-[50%] w-[300px] mx-auto'> <ReactImageZoom {...props} /></div>
            <div className='md:w-[50%]  items-center w-[300px] mx-auto px-4'>
                <h1 className='text-[13px] font-bold text-blue-500'>{title}</h1>
                <h1 className='text-[12px]  py-2 font-semibold'> Price:  ${pricing * qty} </h1>
                <div className='flex justify-start' ><h1 className='text-[12px] font-semibold'>Qty:&nbsp; </h1> 
                    <div className='bg-slate-100'> <button className=" w-[26px] h-[26px] p-0 bg-blue-500" onClick={decrement}>-</button>
                <span className="px-3">{qty}</span>
                        <button className="w-[26px] h-[26px] p-0 bg-blue-500" onClick={increment}>+</button></div>
                    
                
                </div>
                <div className='flex justify-start pt-5' ><h1 className='text-[12px] font-semibold py-2'>Size:&nbsp; </h1>
                    <div className='bg-slate-100 '>
                        <select value={shoeSize} className='w-full p-2 h-[40px] bg-slate-100 text-xs' onChange={(e) =>setShoeSize(e.target.value)}>
                            <option value={shoeSize}>{shoeSize}</option><hr />
                            <option value="USA:7.5, UK:7, EU: 41">"USA:7.5, UK:7, EU: 41"</option>
                            <option value="USA:8, UK:8, EU:42">"USA:8, UK:8, EU:42"</option>
                            <option value="USA:8.5, UK:9, EU:43">"USA:8.5, UK:9, EU:43"</option>
                            <option value="USA:9, UK:10, EU:44">"USA:9, UK:10, EU:44"</option>
                            <option value="USA:10, UK:11, EU:45">"USA:10, UK:11, EU:45"</option>
                            
                            
                        </select>
                       
                    
                    </div>


                </div>
                <div className='pt-4 ' ><button onClick={clickToRemove} className='w-full text-[12px] py-3 px-5'>Remove</button></div>
                
         </div>

                        
                   
                    
                    
               
    
        </div>
    )
    
}
export default CheckoutProduct