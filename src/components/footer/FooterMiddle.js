import React from 'react'
import FooterMiddleList from './FooterMiddleList';

const FooterMiddle = () => {
    return (
        <div className='w-full bg-amazon_light text-white'>
            {/*------------------------------top stARTS HERE---------------------------------- */}
            <div className='w-full border-b-[1px] border-gray-500 py-10 '>
                <div className=' max-w-5xl mx-auto text-gray-300'>
                    <div className='w-full grid grid-cols-4 place-items-center items-start'>
                       <FooterMiddleList 
                       title="Get to Know US"
                       one="Careers"
                       />
                       <FooterMiddleList/>

                       <FooterMiddleList/>

                       <FooterMiddleList/>

                    </div>
                </div>
            </div>
            {/*------------------------------top ends HERE---------------------------------- */}
        </div>
    )
}

export default FooterMiddle;