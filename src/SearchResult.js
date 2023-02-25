
import './index.css';
import productItems from './productApi';
import { Link, useLocation } from 'react-router-dom'
import hottestApi from './hottestApi'
import kingsData from './kingscollectiondata';
import Slide from 'react-reveal/Slide';
function SearchResult() {


    const location = useLocation()
    const searchValue = location.state
    console.log(searchValue)

    const searchData = productItems.filter((item) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) 
    ))
    const searchData2 = hottestApi.filter((item) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))
    const searchData3 = kingsData.filter((item) => (
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))



    console.log(searchData)
 
    return (
        <div className='w-full p-4'>



            
            <div className='grid md:grid-cols-5 grid-cols-2 gap-4'>
                <Slide top>
                <div className=' md:col-span-5  col-span-2'><h1 className='text-center font-bold text-xl text-blue-400 bg-slate-100 p-4'>Sneakers Store</h1></div>
                {searchData.length !== 0? 
                searchData.map(({
                    id,
                    image,
                    title,
                    alt,
                    pricing
                }) => (

                    <div className='bg-slate-200 shadow-2xl'>
                        <Link to={`/ItemDisplay/${id}`}>  <img src={image} alt={alt} className="w-full h-[100px] object-cover" /></Link>
                        <Link to={`/ItemDisplay/${id}`}> <h1 className='font-bold text-sm p-4'>{title}</h1></Link>
                        <h1 className=' px-4 text-sm'>${pricing}</h1>
                    </div>)) : <div className=' md:col-span-5 '>
                        
                        <h1 className='text-center font-bold'>Searched Item Not Found</h1></div> }
                
                </Slide>
                



                <Slide top>
                <div className=' md:col-span-5 col-span-2'><h1 className='text-center font-bold text-xl text-blue-400 bg-slate-100 p-4'>Leather Shoes Store</h1></div>
                {searchData2.length !== 0 ?
                    searchData2.map(({
                        id,
                        image,
                        title,
                        alt,
                        pricing
                    }) => (

                        <div className='bg-slate-200 shadow-2xl '>
                            <Link to={`/leatherShoes/${id}`}>  <img src={image} alt={alt} className="w-full h-[100px] object-cover" /></Link>
                            <Link to={`/leatherShoes/${id}`}> <h1 className='font-bold text-sm p-4'>{title}</h1></Link>
                            <h1 className=' px-4 text-sm'>${pricing}</h1>
                        </div>)) : <div className=' md:col-span-5 '>

                        <h1 className='text-center font-bold'>Searched Item Not Found</h1> </div>}
                </Slide>
                
                <Slide top>
                <div className=' md:col-span-5 col-span-2 '><h1 className='text-center font-bold text-xl text-blue-400 bg-slate-100 p-4'>Kings Collection Store</h1></div>
                {searchData3.length !== 0 ?
                    searchData3.map(({
                        id,
                        image,
                        title,
                        alt,
                        pricing
                    }) => (

                        <div className='bg-slate-200 shadow-2xl'>
                            <Link to={`/kingsCollection/${id}`}>  <img src={image} alt={alt} className="w-full h-[100px] object-cover" /></Link>
                            <Link to={`/kingsCollection/${id}`}> <h1 className='font-bold text-sm p-4'>{title}</h1></Link>
                            <h1 className=' px-4 text-sm'>${pricing}</h1>
                        </div>)) : <div className='md:col-span-5 '>
                        
                            <h1 className='text-center font-bold'>Searched Item Not Found</h1></div>}
                </Slide>
            </div>
        </div>

    );
}

export default SearchResult;
