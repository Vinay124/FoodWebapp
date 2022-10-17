import React from 'react'
import { Link } from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'

const FoodDetails = () => {
  return (
    <div className='bg-black'>
        <div className="relative">
        <button 
          className=" outline:none border-none cursor-pointer hover:bg-slate-300 absolute top-14 bg-white w-10 h-15 p-1.5 hover:text-black 
        shadow-md flex rounded-md text-center ml-6"
        >
          <FiChevronLeft fontSize="2em" className="text-orange-500" />
        </button>
      </div>
    </div>
  )
}

export default FoodDetails