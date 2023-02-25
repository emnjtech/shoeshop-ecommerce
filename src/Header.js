
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import CommerceContext from "./context/commerce-context";
import React, { useState } from 'react'
import logo from './assets/gent.png'
import { Icon } from '@iconify/react'


function Header() {
    const navigate = useNavigate()
    const { totalQty, currUser, userLogout,userInfo } = useContext(CommerceContext)
    const [nav, SetNav] = useState(false)
    const [mobileSearch, setMobileSearch] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const myAccountSwitch = () => {
        setIsLoggedIn(!isLoggedIn)
     //   localStorage.setItem("ACCOUNT_DROP_DOWN",JSON.stringify(isLoggedIn))
    }
    /*suseEffect(() => {
        const data = JSON.parse(localStorage.getItem("ACCOUNT_DROP_DOWN"));
        if (data !== null) setIsLoggedIn(data);
    }, []); */

    const handleClick = () => SetNav(!nav)

    const handleMobileSearch = () => setMobileSearch(!mobileSearch)

    const [searchField, setSearchField] = useState("");

    const handleSearchClick = () => {
        if (searchField.trim().length !== 0) {
            navigate("/search", { state: searchField })
            
            setSearchField("")
        }
        else {
            alert("Search box is empty. Enter a search value")
        }

    }

   
    const logout = async () => {
        try {
            await userLogout()
            setIsLoggedIn(!isLoggedIn)
            localStorage.removeItem("USER_INFORMATION");
            
            navigate('/')
           

        }
        catch (e) {
            alert(e.message)
        }
       
    }

  

    const thisUser = () => {
        try {
            if (currUser) {
            }
        }
        catch (e) {
            console.log("not logged in")
        }
    }
    thisUser()

    const handleChange = (event) => {

        setSearchField(event.target.value)

    }
    return (
    <div className='shadow-2xl w-full h-[70px]'>
            <div className='w-[90%] h-[70px] mx-auto'>
                <div className=" flex md:justify-between justify-start items-center  h-full w-full  z-10 ">
                    <div className=' flex mr-auto md:mr-0 '>
                        <Link to="/"><img src={logo} alt='logo' className=' h-[30px] w-[110px]' /> </Link>



                </div>
                <div className='items-center md:w-[50%] flex ml-auto md:bg-blue-200 bg-transparent  rounded-full h-[40px] my-4 focus:border-[0px] '>
                    <div className='hidden md:flex md:w-full h-full'>
                        <input type='text' className='md:w-full text-[13px] bg-blue-200 p-4  rounded-full outline-none md:rounded-full 
                        focus:border-[0px] md:box-border box-border md:border-[0px] 
                        h-full' placeholder='Search...' onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearchClick()
                                }
                            }}  value={searchField}  onChange={handleChange} />
                    </div>
                    <div className='md:bg-blue-200 rounded-full w-17 h-full hidden md:flex'><Icon icon="bxs:search" onClick={handleSearchClick} className='md:w-10 md:h-[full] w-7 h-[30px] text-blue-800 mx-auto my-auto' /></div>
                    
                </div>

                <div className={!mobileSearch ? 'items-center md:hidden flex ml-auto bg-transparent  rounded-full h-[40px] my-4 focus:border-[0px] translate-x-[10px] delay-100 ease-in-out transition-[19s]' : 'translate-x-[-10px] transition ease-in-out duration-100 items-center  md:hidden flex ml-auto bg-blue-200  rounded-full h-[40px] my-4 focus:border-[0px] ' }>
                    <div className={!mobileSearch ? 'hidden md:hidden ' : 'w-[full] h-full '}>
                        <input type='text' className='md:hidden text-[13px] bg-blue-200 p-4  rounded-full outline-none md:rounded-full 
                        focus:border-[0px] md:box-border box-border md:border-[0px] 
                        h-full ' placeholder='Search...' onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearchClick()
                                }
                            }} value={searchField} onChange={handleChange}
                        />
                    </div> 
                    <div className='bg-transparent rounded-full w-10 h-full md:hidden ml-auto z-10'>{!mobileSearch ?
                        <Icon icon="bxs:search" onClick={handleMobileSearch} className=' md:h-[full] w-7 h-[30px] text-blue-800 mx-auto my-1' />
                        : <div className='flex my-1'>
                            <Icon icon="arcticons:xiaoyuan-search" onClick={handleMobileSearch} className=' md:h-[full] w-7 h-[30px] text-blue-800 mx-auto my-auto' />
                            <Icon icon="bxs:search" className=' md:h-[full] w-7 h-[30px] text-blue-800 mx-auto my-auto ' onClick={handleSearchClick} /></div>}</div>
                </div>



                
                    <div className='hidden md:flex justify-center items-center  '>
                    <div  onClick={handleClick} className='px-5'>
                        {!nav ? 
                        <div>
                        <Icon icon="ep:menu"  className='text-3xl text-blue-500 mb-[-3px]'/>
                        <h1 className='text-[7px] text-center'>Menu</h1>
                       </div>
                        
                        : <XIcon className='w-7 stroke-slate-600' />}
                </div>
                   { /* <ul className='hidden md:flex  mr-6 text-[12px] font-bold text-blue-900'>
                            <Link to="/" ><li className=' hover:text-slate-400'>Home</li></Link>
                        <Link to="/sneakersShop"><li className=' hover:text-slate-400'>Shop Sneakers</li></Link>
                        <Link to="/allLeatherShoes"><li className=' hover:text-slate-400'>Leather Shoes</li></Link>
                        <Link to="/kingsCollections"><li className=' hover:text-slate-400'>Kings Collection</li></Link>
                          
                    </ul> */}

                    <div className='flex justify-between  items-center '>
                       {!currUser? <Link to="/signIn"><Icon icon="ph:user-circle-plus-light" className='text-[30px] text-blue-600 mb-[-3px]'/>
                       <h1 className='text-[6px] text-center'>Sign in</h1>
                       </Link> 
                            :<div> <Icon onClick={myAccountSwitch} icon="carbon:user-avatar-filled" className='text-3xl mb-[-3px]'/>
                            <h1 className='text-[6px] text-center'>My account</h1></div>}
                        <div className={!isLoggedIn ? 'hidden' : 'z-10 origin-top-right absolute right-[20px] mt-[220px] h-48 w-40 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'} role="menu" aria-orientation="vertical">
                            <h1 className='font-bold pt-2 text-sm text-blue-400 text-center'>Welcome</h1><hr />
                            
                           
                                
                         
                            <h1 className='font-bold p-2 text-xs text-center'>{userInfo}</h1>
                            <Link to="/myOrder"> <button className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>MY ORDER</h1>
                            </button></Link><hr />
                            <Link to="/Checkout"> <button className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>MY BASKET</h1>
                            </button></Link><hr />
                            <button onClick={logout}  className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>SIGN OUT</h1>
                            </button>
                        
                        </div> 
                        <div className='flex justify-start items-center pl-4'>
                            {totalQty >= 1 ? <Link to="/Checkout"><Icon icon="fluent:cart-24-filled" className='text-4xl text-blue-600' /></Link> :
                             <Link to="/Checkout">  
                              <Icon icon="fluent:cart-20-regular" className='text-4xl text-blue-600' /></Link>
                              }
                              <h1 className='text-[12px] text-blue-800 ml-[-5px]'>{totalQty}</h1>
                              </div>
                        

                    
                    </div>
                </div>
                <div className='md:hidden flex justify-between my-auto mx-4'>

                    <Link to="/Checkout"> <Icon icon="clarity:shopping-cart-solid-badged" className='text-2xl text-blue-800' /></Link>
                    <h1 className='text-[12px] text-blue-800'>{totalQty}</h1>


                </div>
                    <div className='md:hidden ' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-7 stroke-slate-600' /> : <XIcon className='w-7 stroke-slate-600' />}
                </div>
               
                </div>
                {/* Mobile menu items   */}
                <ul className={!nav ? 'hidden' : 'absolute z-30 bg-blue-700 w-[90%] rounded-xl px-8  text-white '}>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/sneakersShop"><li>Shop Sneakers</li></Link>
                <Link to="/allLeatherShoes"><li>Leather Shoes</li></Link>
                <Link to="/kingsCollections"><li>Kings Collections</li></Link>

                    <div className='flex flex-col mb-4'>

                    {!currUser ? <Link to="/signIn"> <h1 className='text-[15px] font-bold p-2 pr-2'>My Account</h1></Link> : 
                        <div>

                            <h1 className='font-bold p-2 text-xs text-center'>{userInfo}</h1>
                            <Link to="/myOrder"> <button className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>MY ORDER</h1>
                            </button></Link><hr />
                            <Link to="/Checkout"> <button className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>MY BASKET</h1>
                            </button></Link><hr />
                            <button onClick={logout} className=' bg-transparent p-0 w-full text-black'>
                                <h1 className='font-bold p-2 hover:bg-slate-300 bg-slate-100 text-xs text-center'>SIGN OUT</h1>
                            </button>
                            </div>
                    }
                    </div>
                </ul>
                <div>

                </div>
            </div>



            </div>


        )
}

export default Header