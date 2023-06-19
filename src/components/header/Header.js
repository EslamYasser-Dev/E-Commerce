import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { logo } from "../../assets/index"

const Header = () => {
  return (
    <div>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
        <div className="px-2 h-[80%] flex items-center border border-transparent
         hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        <div className="px-2 h-[80%] flex items-center border border-transparent
         hover:border-white cursor-pointer duration-100">
        <LocationOnOutlinedIcon />
        <p className='text-sm '>Deliver to <span>Egypt</span></p>
      </div>
      </div>

    


      { }
      { } 
      { }










    </div>
  )
}

export default Header