import React, { useState, useContext,useEffect } from 'react'
import { toast } from 'react-toastify';
import { useParams, } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom';
import CommerceContext from './context/commerce-context';

import kingsData from './kingscollectiondata';

import KingsComponent from './kingsComponent';
export default function KingsCollectionItemDisplay() {

  const { id } = useParams()
  const { addToCart} = useContext(CommerceContext)



  useEffect(() => {
    window.scrollTo(0, 0);
  },);



  const itemIndex = kingsData.find((item) => item.id === parseInt(id));
  console.log(itemIndex.title)
  const props = { width: 500, height: 500, zoomWidth: 500, img: itemIndex.image, zoomPosition: "original" };
  const [shoeSize, setShoeSize] = useState(itemIndex.size.L)

  const newItem = {
    id: itemIndex.id,
    title: itemIndex.title,
    pricing: itemIndex.pricing,
    qty: itemIndex.qty,
    image: itemIndex.image,
    alt: itemIndex.alt,
    size: shoeSize

  }
  const handleAddToCart = () => {
    addToCart(newItem)
    toast("Product has been added to your cart", {
      position: toast.POSITION.TOP_CENTER
    })
  }


  return (
    <div className='w-[90%] h-full mx-auto my-9 '>
      <div className='md:flex md;justify-between w-full h-full mb-10'>
        <div className='md:w-[50%] w-full h-full'>
          <ReactImageZoom {...props} />


        </div>
        <div className='h-full w-full md:w-[50%]'>
          <h1 className='text-center mt-10 p-3 text-2xl font-bold'>{itemIndex.title}</h1>
          <h1 className='text-center text-sm'>{itemIndex.desc}</h1>
          <h1 className='text-center mt-10 text-2xl font-bold'>${itemIndex.pricing}</h1>
          <p className='text-[10px] text-center'>(Free delivery within NG,US,UK)</p>
          <div className='w-[60%] pl-[10px]  mx-auto flex pt-5'>
         <h1 className='text-[18px] p-4 font-bold'>Size:</h1>
            <select value={shoeSize} className='p-2 h-[50px] outline-none bg-slate-200 text-slate-600 text-[14px]' onChange={(e) => setShoeSize(e.target.value)}>
              <option value={itemIndex.size.L}>{itemIndex.size.L}</option>
              <option value={itemIndex.size.LM}>{itemIndex.size.LM}</option>
              <option value={itemIndex.size.XL}>{itemIndex.size.XL}</option>
              <option value={itemIndex.size.XL2}>{itemIndex.size.XL2}</option>
              <option value={itemIndex.size.XXL}>{itemIndex.size.XXL}</option>

            </select>
          </div>
          <div className='w-[30%] mx-auto py-5'> <button className='w-full' onClick={handleAddToCart}>Add To Cart</button>
            </div>


          <hr />
        </div>


      </div>

      <div class=" grid md:grid-cols-4 grid-cols-1 justify-between md:w-full  gap-4 ">


        {kingsData.slice(0, 8).map((item) => (

          <KingsComponent

            title={item.title}
            key={item.id}
            id={item.id}
            pricing={item.pricing}
            qty={item.qty}
            image={item.image}
            alt={item.alt}
            size={item.size}
          />
        ))

        }
      </div>


    </div>
  )
}
