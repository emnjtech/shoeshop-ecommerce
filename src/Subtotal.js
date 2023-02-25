import React from 'react'

import CurrencyFormat from 'react-currency-format'
import { useContext } from 'react'
import CommerceContext from './context/commerce-context'
import { useNavigate } from 'react-router-dom'


function Subtotal({ total}) {
const {totalQty,emptyCart,currUser} = useContext(CommerceContext)
    
    const navigate = useNavigate()
    const handleCheckout = () => {
        if (currUser) {
            navigate("/CheckoutProcessor")
        } else if (!currUser) {
            navigate("/signIn")
        }
    }
    
    return (
        <div className="w-[full]  py-5 mx-auto px-6">
            <h1 className='text-[12px] font-bold p-2'>Order Summary</h1>
            <div className='mx-auto'><CurrencyFormat 
                renderText={(value) => ( <>
                        <h1 className='p-2'>Total Items: {totalQty}</h1>
                        
                    <h1 className='p-2 font-semibold'>SubTotal: ${total}</h1> 
                      </> 
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                
            
            />
            </div>
            {total >=1 ? <div className='flex justify-between '>
                <button onClick={handleCheckout} className='text-[12px] py-3 px-5'>Checkout</button> <button className='hover:bg-slate-500 text-[12px] py-3 px-5' onClick={() => { emptyCart(); localStorage.clear()}}>Clear Cart</button>
            </div>: ""}
        </div>
    )
}

export default Subtotal
