import React from 'react'
import { useContext,useState} from "react";
import CommerceContext from "./context/commerce-context";
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import Slide from 'react-reveal/Slide'
import { Link } from 'react-router-dom'

function KingsComponent({ key, title, pricing, image, qty, alt, id, size}) {
    const { addToCart, } = useContext(CommerceContext)
    const [shoeSize, setShoeSize] = useState(size.L)



    const newItem = {
        id,
        title,
        pricing,
        qty,
        image,
        alt,
        size:shoeSize,

    }



    const handleAddToCart = () => {
        addToCart(newItem)
        toast("Product has been added to your cart", {
            position: toast.POSITION.TOP_CENTER
        })
    }


    return (
        <div >
            <Slide bottom>
                <div className="w-full  mb-6 products " key={id} > <Link to={`/kingsCollection/${id}`}><img src={image} alt={alt} /></Link>
                    <div className="w-full h-[35px] px-3 "> <Link to={`/kingsCollection/${id}`}><h1 className=' text-[10px]'>{title}</h1></Link></div>

                    <div className='flex justify-start '>
                        <div className='w-[50%] pl-[10px]  mr-auto'>


                            <select value={shoeSize} className='w-full p-1 h-[30px] outline-none text-slate-600 text-[10px]' onChange={(e) => setShoeSize(e.target.value)}>
                                <option value={size.L}>{size.L}</option>
                                <option value={size.LM}>{size.LM}</option>
                                <option value={size.XL}>{size.XL}</option>
                                <option value={size.XL2}>{size.XL2}</option>
                                <option value={size.XXL}>{size.XXL}</option>

                            </select>
                        </div>
                        <div className=" h-[30px] px-3 p-1 "> <h1 className=' text-[16px] font-bold'>$ {pricing}</h1></div>
                        <div className=" h-[30px] px-3 p-1">  <Icon icon="bi:cart-plus-fill" onClick={handleAddToCart} className='text-2xl  text-blue-400' /></div>
                    </div>

                    <hr />
                </div>
            </Slide>


        </div>



    )
}
export default KingsComponent

/* <div className="product__rating"> {Array(rating)
                        .fill()
                        .map((_, i) => (<p>⭐</p>))}
                            
                        
                    </div> */