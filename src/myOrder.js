import React from 'react'
import { useContext } from 'react'
import CommerceContext from './context/commerce-context'

import ProtectedRoute from './ProtectedRoute';
export default function MyOrder() {
    const { currUser } = useContext(CommerceContext)
    console.log(currUser)
    return (
     <ProtectedRoute>
        <div className='w-[90%] p-5 mx-auto'>
            <div className='md:w-[50%] w-full mx-auto bg-slate-200 rounded-lg shadow-2xl text-center p-10'>
                <h1 className='text-lg font-bold text-blue-400'>You have no active orders</h1>
            </div>
            </div>
        </ProtectedRoute>
    )
}
