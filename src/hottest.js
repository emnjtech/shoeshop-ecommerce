import React from 'react'
import {toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import {  useContext,useState } from 'react';
import CommerceContext from './context/commerce-context';
import { Link } from 'react-router-dom';

function Hottest({ key, title, pricing, image, qty,alt,id,size }) {
    const { addToCart, } = useContext(CommerceContext)
  const [shoeSize, setShoeSize] = useState(size.L)



    const newItem = {
         id,
        title,
        pricing,
        qty,
      image,
        size:shoeSize,

    }
  
  console.log(shoeSize)
  
  const handleAddToCart = () => {
    addToCart(newItem)
    toast("Product has been added to your cart", {
      position: toast.POSITION.TOP_CENTER
    })
  }

 
  
  return (
      <div >
          
      <div className="  md:w-full mx-auto mb-6  hot" key={key} ><Link to={`/leatherShoes/${id}`}><img src={image} alt={alt}s /></Link> 
        <div className="w-full h-[35px] px-3 "> <Link to={`/leatherShoes/${id}`}> <h1 className=' text-[10px]'>{title}</h1></Link></div>

                      <div className='flex justify-start '>
                          <div className='w-[50%] pl-[10px] mr-auto'>
            <select value={shoeSize} className='w-full p-1 h-[30px] outline-none text-slate-600 text-[10px]' onChange={(e) => setShoeSize(e.target.value)}>
              <option value={size.L}>{size.L}</option>
              <option value={size.LM}>{size.LM}</option>
              <option value={size.XL}>{size.XL}</option>
              <option value={size.XL2}>{size.XL2}</option>
              <option value={size.XXL}>{size.XXL}</option>

            </select>
            

                          </div>
                          <div className=" h-[30px] py-2 "> <h1 className=' md:text-[12px] text-[11px] font-bold'>$ {pricing}</h1></div>
                          <div className=" h-[30px] p-1"> {<Icon icon="bi:cart-plus-fill" onClick={handleAddToCart} className='text-2xl  text-blue-400' />  }</div>
                      </div>
                  
                  <hr/>
                  </div>
   
      
              
          </div>

          

  )
}

export default Hottest