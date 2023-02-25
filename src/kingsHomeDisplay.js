import React from 'react'
import { Link } from 'react-router-dom'

export default function kingsHomeDisplay({ id, title, pricing, alt, image, desc, qty }) {



    return (
      
        <div className="md:w-[100%] mx-auto w-[100%] md:h-[400px] h-full mb-[50px] bg-blue-400">
            
            <div className='md:flex md:justify-between items-start '>
                <div className='md:w-[50%] w-[100%] h-full md:h-full bg-slate-900 kings mb-[-100px]'><Link to={`/kingsCollection/${id}`} ><img src={image} alt={alt}
                /></Link></div>
                <div className='md:w-[50%] w-[100%] md:p-1 p-5 h-full'>
                    <Link to={`/ItemDisplay/${id}`} ><h1 className='text-white font-bold text-[15px] text-center p-3'>KINGS OF THE STREET COLLECTION</h1></Link><hr className='hidden'/>
                    <h1 className='md:text-sm text-lg font-semibold text-center px-10 md:mt-0 mt-[10px] overflow-clip '>{title}</h1>
                   <div className='md:h-[200px] overflow-hidden'><p className='text-sm  text-center md:p-2 p-5 break-words overflow-clip'>{desc}</p></div>
                    <h1 className='text-3xl font-bold text-center  px-10 '>${pricing}</h1>
                    <p className='text-[10px]  text-center px-4'>(free delivery included for within US,NG,UK)</p>
                    <div className=' w-[100%] px-8 mx-auto'>
                        <div className='mx-auto w-[full] px-10'><Link to={`/kingsCollection/${id}`} ><button className='w-full'>Shop Now!</button></Link></div>
                        </div>
                
                </div>
            </div></div>
  )
}
