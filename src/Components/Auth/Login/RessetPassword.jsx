import React from 'react'
import Card from './Card'
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const RessetPassword = () => {
  return (
    <div>
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
          <h1 className="text-5xl font-nunito mt-20 ml-5 ">Reset Password</h1>
          <p className=" max-w-ml text-xl ml-5 font-nunito text-ml mt-4 text-gray-500">
          Please enter your email address to request a password reset
          </p>
        </div>

        <div>
          <form>
            <div className="flex justify-center m-6">
            <input
                type="password"
                placeholder="Enter Your Password"
                className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:ring-slate-300"
              />
            </div>
          </form>
        </div>

        <div className="mt-8">
          <button className="text-2xl font-nunito rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 flex justify-center m-auto px-20">
            Send New Password
          </button>
        </div>
      </Card>
    </div>
  )
}

export default RessetPassword