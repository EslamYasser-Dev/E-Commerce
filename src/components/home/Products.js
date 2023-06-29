
import { Star } from '@mui/icons-material';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {

    const data = useLoaderData();
    const ProductData = data.data;
    return (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
            {
                ProductData.map((item) => (
                    <div className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent 
                    shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative' key={item.id} >
                        <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
                        <div className='w-full h-auto flex items-center justify-center'>
                            <img className='w-52 h-64 object-contain ' src={item.image} alt='product' />                         
                        </div>
                        <div className='px-6'>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0, 20)}</h2>
                                <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
                            </div>

                            <div>
                                <p className='text-sm'>{item.description.substring(0, 100)}...</p>
                                <div className='text-yellow-500'>
                                   
                                      <Star />
                                      <Star />
                                      <Star />



                                </div>
                            </div>
                            <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border
                            hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
                            active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;