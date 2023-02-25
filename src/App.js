
import React from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import SneakersItemDisplay from './SneakersItemDisplay'
import AllProducts from './allProducts'
import LeatherShoes from './leatherShoes'
import AllKingsCollection from './allKingsCollection'
import AllLeatherShoes from './allLeatherShoes'
import KingsCollectionItemDisplay from './kingsCollectionItemDisplay'
import SearchResult from './SearchResult'
import SignIn from './signIn'
import MyOrder from './myOrder'
import CheckoutProcessor from './CheckoutProcessor'
import PageNotFound from './PageNotFound'
function App() {

    return (
        <div className='w-full'>
        <div className="  mx-auto">
            <ToastContainer />
            <Routes>
                <Route path="/Checkout" element={
                    <>
                        <Header />
                        <Checkout />
                        <Footer />
                    </>
                        }/>
                <Route path="/" element={
                    <>
                        <Header />
                        <Hero />
                        <Home />
                        <Footer />
                    </>
                    
                } /> 
                <Route path="/ItemDisplay/:id" element={
                    <>
                        <Header />
                       
                        <SneakersItemDisplay />
                        <Footer />
                    </>

                } /> 
                <Route path="/sneakersShop" element={
                    <>
                        <Header />

                        <AllProducts />
                        <Footer />
                    </>

                } /> 
                <Route path="/leatherShoes/:id" element={
                    <>
                        <Header />

                        <LeatherShoes />
                        <Footer />
                    </>

                } /> 
                <Route path="/kingsCollection/:id" element={
                    <>
                        <Header />

                        <KingsCollectionItemDisplay/>
                        <Footer />
                    </>

                } /> 
                <Route path="/kingsCollections" element={
                    <>
                        <Header />

                        <AllKingsCollection />
                        <Footer />
                    </>

                } /> 
                <Route path="/allLeatherShoes" element={
                    <>
                        <Header />

                        <AllLeatherShoes />
                        <Footer />
                    </>

                } /> 

                <Route path="/search" element={
                    <>
                    <Header />
                        <SearchResult />
                        <Footer />
                     
                    </>

                } /> 

                <Route path="/signIn" element={
                    <>
                        <Header />
                        <SignIn />
                        <Footer />

                    </>

                } /> 

                <Route path="/myOrder" element={
                    <>
                        <Header />
                        <MyOrder />
                        <Footer />

                    </>

                } /> 

                <Route path="/CheckoutProcessor" element={
                    <>
                        <Header />
                        <CheckoutProcessor />
                        <Footer />

                    </>

                    } /> 
                    <Route path="*" element={
                        <>
                         
                            <PageNotFound />
                            <Footer />

                        </>} />

            </Routes>
            
            </div>
        </div>
    )
}

export default App;
