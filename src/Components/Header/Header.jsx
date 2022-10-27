import React from 'react'
import { Link } from 'react-router-dom'
import {RiCompassFill} from 'react-icons/ri'
import {AiFillHeart} from 'react-icons/ai'
import {TbMapPin} from 'react-icons/tb'
import {MdNotificationsActive} from 'react-icons/md'
import {RiShoppingCart2Fill} from 'react-icons/ri'

const Header = () => {
  return (
    <div>
      <nav className='max-w-lg fixed h-auto w-full bottom-0 p-5 flex overflow-y-hidden overflow-x-auto justify-between rounded-t-lg bg-white shadow-lg'>
        <Link className='nav_link' to="/Home">
          <RiCompassFill fontSize="1.7em" className='text-slate-300 hover:text-orange-400'/>
        </Link>
        <Link className='nav_link' to="/Location">
          <TbMapPin fontSize="1.7em" className="text-slate-300  hover:text-orange-400"/>
        </Link>
        <Link className='nav_link' to="/Cart">
          <RiShoppingCart2Fill fontSize="1.7em" className="text-slate-300  hover:text-orange-400"/>
        </Link>
        <Link className='nav_link' to="/Notification">
          <MdNotificationsActive fontSize="1.7em" className="text-slate-300  hover:text-orange-400"/>
        </Link>
        <Link className='nav_link' to="/Wishlist">
          <AiFillHeart fontSize="1.7em" className="text-slate-300  hover:text-orange-400"/>
        </Link>
      </nav>
    </div>
  )
}

export default Header