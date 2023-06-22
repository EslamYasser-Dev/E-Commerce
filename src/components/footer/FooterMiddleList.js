import React from 'react';


const FooterMiddleList = ({ title, items }) => {
    return (
        <div>
            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
            <ul className='flex flex-col gap-2 font-bodyFont'>

                {
                    items.map((item) => item.listData.map((data, i) => (<li key={i} className='footerlink'>{data}</li>)))
                }
            </ul>
        </div>
    )
}

export default FooterMiddleList;