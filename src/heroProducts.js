import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade'

import productItems from "./productApi";
import Slide from 'react-reveal/Slide';


export default function HeroProducts() {
        const settings = {
            infinite: true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
           
            autoplay: true,
            autoplaySpeed: 3000,
        };
  
        return (
            <>
                <div className='w-[90%] mx-auto my-6 flex justify-between  h-[50px]'><div className='bg-blue-400 h-full w-[20%]'></div>
                    <Fade>
                    <div className='w-[40%]'><h1 className='text-center text-blue-400 text-sm md:text-lg h-full p-2 font-bold'>NEW ARRIVALS OF THE WEEK </h1></div>
                        <div className='bg-blue-400 h-full w-[20%]'></div></Fade></div>
                <Slide left>
                <div className="className='md:w-[90%] mx-auto w-[90%] md:h-[500px] md:mb-10 mb-1 h-[300px] ">
                   
                   
                    <Slider {...settings}>
                        {productItems.map(({
                            id,
                            title,
                            alt,
                            image,
                            pricing,
                            size,

                        }) => (

                               <div key={id}>
                                <img src={image} alt={alt} className='md:w-[600px] md:h-[500px] object-cover w-[300px] h-[300px]'  />
                                <div className='relative md:top-[-450px] top-[-270px] w-[full] flex h-[40px] ml-4 items-center '>
                                    <div className='bg-blue-900 md:w-[100px] w-[50px]  h-full'><Link to={`/itemDisplay/${id}`}><h1 className='p-1 md:py-3 text-[10px] text-center  font-bold text-white'>SHOP NOW</h1></Link></div>
                                    <div className='mx-5 w-[200px '><Link to={`/ItemDisplay/${id}`}><h1 className='border-blue-200 border-y-2 p-1 md:py-1 text-[10px]  md:text-xl  font-bold text-white'>{title}</h1></Link></div>
                                    
                                    
                                </div>
                            <div className='relative md:top-[-100px] top-[-70px] w-[200px] flex h-[40px] ml-4 '>
                           
                                   
                                </div>
                            </div>
                        )) }
                    </Slider>
                    </div>
                </Slide>
            </>
        )
    }
