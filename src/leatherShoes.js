import React, {useContext,useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom';
import CommerceContext from './context/commerce-context';
import hottestApi from './hottestApi'
import Hottest from './hottest';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

export default function LeatherShoes() {

    const { id } = useParams()
    const { addToCart} = useContext(CommerceContext)




    const itemIndex = hottestApi.find((item) => item.id === parseInt(id));
    console.log(itemIndex.size)
    const props = { width: 500, height: 500, zoomWidth: 500, img: itemIndex.image, zoomPosition: "original" };
    const [shoeSize, setShoeSize] = useState(itemIndex.size.L)
    const newItem = {
        id: itemIndex.id,
        title: itemIndex.title,
        pricing: itemIndex.pricing,
        qty: itemIndex.qty,
        image: itemIndex.image,
        alt: itemIndex.alt,
        size:shoeSize,

    }
    const handleAddToCart = () => {
        addToCart(newItem)
        toast("Product has been added to your cart", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
                    <div className='w-[30%] mx-auto py-5'> <button className='w-full' onClick= { handleAddToCart}>Add To Cart</button> </div>


                    <hr />
                </div>


            </div>

            <div class=" md:grid md:grid-cols-4 grid grid-cols-1  justify-between md:w-full w-full  gap-4 my-7">
                <Slide right>
                    <div class="bg-white w-full md:w-[200px] h-ful pl-3 mx-auto mb-8">
                        <h1 className=' text-center text-[30px] p-6 font-bold text-blue-400'> LORDS OF THE LEATHER</h1>
                        <div className='px-6 hidden md:block'><Link to="/allLeatherShoes"><button className='w-full'>More!</button></Link></div>

                    </div>
                    {hottestApi.slice(0, 3).map(({
                        id,
                        title,
                        image,
                        pricing,
                        alt,
                        qty,
                        size,
                    }) => (
                        <Hottest
                            key={id}
                            id={id}
                            title={title}
                            pricing={pricing}
                            qty={qty}
                            image={image}
                            alt={alt}
                            size={size}

                        />
                    ))}
                </Slide>
                <div className='px-6 md:hidden block'><Link to="/allLeatherShoes"><button className='w-full'>More!</button></Link></div>
            </div>


        </div>
    )
}
