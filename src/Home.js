import React from 'react'
import Product from './Product'
import productItems from "./productApi";
import Hottest from './hottest'
import hottestApi from './hottestApi'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import KingsHomeDisplay from './kingsHomeDisplay';
import kingsData from './kingscollectiondata';
import {useState,useEffect} from 'react'
function Home() {
    const [randomItem, setRandomItem] = useState([])
    
useEffect(() => {
        const pickRandom = () => {
            
  
        let productObject = Object.values(kingsData)
        let randomProducts = productObject[Math.floor(Math.random() * productObject.length)]
        setRandomItem(randomProducts)
            
        }
        pickRandom()
},[]);

  
    
    return (

            
      <div className="md:w-[90%] mx-auto w-[90%]">
        
            
            <div className="md:grid md:grid-cols-4 grid grid-cols-2 justify-between md:w-full w-full items-center gap-4 my-7">
                <Slide right>
                <div className="bg-white w-full md:w-[200px] h-ful pl-3 mx-auto mb-8">
                        <h1 className=' text-center text-[25px] px-4 py-2 font-bold text-blue-400'> LORDS OF THE LEATHER</h1>
                        <div className='px-6 '><Link to="/allLeatherShoes"><button className='w-full'>More!</button></Link></div>
                    
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
             
                </div>
                
            <Slide bottom>
            <div >
                    <KingsHomeDisplay
                    key={randomItem.id}
                    id={randomItem.id}
                    title={randomItem.title}
                    pricing={randomItem.pricing}
                    qty={randomItem.qty}
                    image={randomItem.image}
                    desc = {randomItem.desc}
                    alt={randomItem.alt}
                        
                    /> 
               
                </div>
            </Slide>
            <div class=" grid md:grid-cols-4 grid-cols-2 justify-between md:w-full  gap-4 ">


                {productItems.slice(0, 12).map((item) => (

                    <Product

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
            <Slide bottom> <div className='w-[25%] mx-auto my-5'><Link to='/sneakersShop'> <button className='w-full'>More</button></Link></div></Slide>
       </div>

    )
}

export default Home