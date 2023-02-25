import React from 'react'
import { useContext,useEffect } from 'react'
import CommerceContext from './context/commerce-context'
import developer from './assets/dev.png'
import ProtectedRoute from './ProtectedRoute';
export default function CheckoutProcessor() {
    const { currUser } = useContext(CommerceContext)
    console.log(currUser)

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <ProtectedRoute>
            <div className='w-[90%] p-5 mx-auto'>

                <div className='md:w-[50%] w-full mx-auto bg-slate-200 rounded-lg shadow-2xl text-center p-10'>
                    <div className='w-[150px] mx-auto'> <img src={developer} width="120px" alt='developer'/></div>
                    <h1 className='text-lg font-bold text-blue-400'>Oops! This is where we stop for now. Hope you enjoyed your tour on the website. What next?</h1>
                    <h1 className='text-lg font-bold text-blue-900'><a href="https://emnjtech.github.io" className='hover:text-slate-500'>Would you want to talk with the Developer?</a></h1>
                </div>
            </div>
        </ProtectedRoute>
    )
}