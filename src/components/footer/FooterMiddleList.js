import React from 'react'

const FooterMiddleList = ({title,one,two,three,four}) => {
    return (
        <div>
            <h3 className='font-titleFont text-white text-base font-semibold mb-3'>{title}</h3>
            <ul className='flex flex-col gap-2 font-bodyFont'>
                <li className='footerlink'>{one}</li>
                <li className='footerlink'>{two}</li>
                <li className='footerlink'>{three}</li>
                <li className='footerlink'>{four}</li>
            
            </ul>
        </div>
    )
}

export default FooterMiddleList;