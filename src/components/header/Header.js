import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from "../../assets/index"

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const allItems = [
    {
      _id: 101, title: "All Departments"
    },
    {
      _id: 102, title: "Automotive"
    },
    {
      _id: 103, title: "Baby"
    },
    {
      _id: 104, title: "Beauty & personal care"
    },
    {
      _id: 105, title: "Books"
    },
    {
      _id: 106, title: "Boy's Fashion"
    },
    {
      _id: 107, title: "Computers"
    },
    {
      _id: 108, title: "Deals"
    },
    {
      _id: 109, title: "Digital Music"
    },
    {
      _id: 110, title: "Electronics"
    },
    {
      _id: 111, title: "Girls Fashion"
    },
    {
      _id: 112, title: "Health & houseHold"
    },
    {
      _id: 113, title: "Home & kitchen"
    },
    {
      _id: 114, title: "Industrial & Scientific"
    },
    {
      _id: 115, title: "Kindle Store"
    },
    {
      _id: 116, title: "Used Items"
    },
    {
      _id: 117, title: "Misslenous"
    },
    {
      _id: 118, title: "Raw Msterials"
    },
    {
      _id: 119, title: "Music, CD & vinyl"
    },
    {
      _id: 120, title: "Pet Suppliers"
    },
    {
      _id: 121, title: "Prime Videos"
    },
    {
      _id: 122, title: "Software"
    },
    {
      _id: 123, title: "Sports & Outdoors"
    },
    {
      _id: 124, title: "tool & home improvements"
    },
    {
      _id: 125, title: "Toys & Games"
    },
    {
      _id: 126, title: "Video Games"
    },
    {
      _id: 127, title: "Women's Fashion"
    }
  ];
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
          <span onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm 
          text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All <span></span><ArrowDropDownOutlinedIcon /></span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
                   bg-white border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {
                  allItems.map((item) => (
                    <li key={item._id} className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
                    hover:border-b-amazon_blue cursor-pointer duration-200">{item.title}</li>
                  ))
                }
              </ul>
            </div>
          )}
          <input type='text' className="h-full text-base text-amazon_blue flex flex-grow outline-none border-none px-2" />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow
           hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"><SearchIcon /></span>
        </div>



      </div>
    </div>
  );
}

export default Header