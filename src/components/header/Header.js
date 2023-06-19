import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from "../../assets/index"

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  console.log(showAll)
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

        <div className="h-10 rounded-md flex flex-grow relative">
          <span  onClick={()=>setShowAll(!showAll)}
          className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm 
          text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All <span></span><ArrowDropDownOutlinedIcon /></span>
            {  showAll &&(
                <div>
                  <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
                   bg-white border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                    <li>All Deparments</li>
                  </ul>
                </div>
            )}
          <input type='text' className="h-full text-base text-amazon_blue flex flex-grow outline-none border-none px-2"/>
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow
           hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"><SearchIcon/></span>
        </div>



      </div>
    </div>
  );
}

export default Header