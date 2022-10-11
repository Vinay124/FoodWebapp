import React from 'react'
import Card from './Card'
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const Registration = () => {
  return (
    <div className='max-w-lg'>
        <Card>
        <div className="relative">
          <Link>
            <div className=" absolute bottom-2 bg-white w-10 h-15 p-1.5 shadow-md flex rounded-md text-center ml-6">
              <FiChevronLeft
                color="black"
                className="hover:text-orange-500"
                fontSize="2em"
              />
            </div>
          </Link>
        </div>
        <div>
          <h1 className="text-5xl font-nunito mt-20 ml-5 ">Registration</h1>
          <p className="max-w-7xl ml-5 font-nunito text-xl mt-4 text-gray-500">
            Enter your phone number to verify your account
          </p>
        </div>
        <div>
        <form>
            <div className="m-6">
              <label className="text-xl font-nunito">Mobile Number</label>
              <input
                type="email"
                placeholder="+91-123-456-7894" maxlength="10"
                className="flex mt-2 p-5 w-full rounded border text-xl border-gray-200 focus:ring-slate-300"
              />
            </div>
            <div className="mt-8">
         <Link to="/Home">
         <button className="text-2xl font-nunito rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 flex justify-center m-auto px-20">
            Send
          </button>
         </Link>
        </div>
          </form>
        </div>
        </Card>
    </div>
  )
}

export default Registration