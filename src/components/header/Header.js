import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { logo } from "../../assets/index"

const Header = () => {
  return (
    <div>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
        <div className="headerhover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>

        <div className="headerhover">
          <LocationOnOutlinedIcon />
          <p className="text-sm text text-lightText font-light flex flex-col">Deliver to
            <span className="text-sm font-semibold -mt-1 text-whiteText">Egypt</span></p>
        </div>

        <div>
          <span>All <span></span><ArrowDropDownOutlinedIcon /></span>
        </div>



      </div>
    </div>
  )
}

export default Header