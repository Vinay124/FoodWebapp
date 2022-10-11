import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const Verification = () => {
  return (
    <div className="max-w-lg">
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
          <h1 className="text-5xl font-nunito mt-20 ml-5 ">Verification</h1>
          <p className=" max-w-ml text-xl ml-5 font-nunito text-ml mt-4 text-gray-500">
            Please type the verification code sent to prelookstudio@gmail.com
          </p>
        </div>

        <div>
          <form>
            <div className="flex justify-center">
              <input
                type="otp"
                className="bg-white bottom-2 w-16 text-black text-2xl h-17 p-3.5 shadow-md 
                shadow-neutral-300 flex rounded-md text-center m-6 focus:border-orange-400"
                placeholder="0" maxlength="1"
              />
              <input
                type="otp"
                className="bg-white bottom-2 w-16 text-black text-2xl h-17 p-3.5 shadow-md 
                shadow-neutral-300 flex rounded-md text-center m-6 focus:border-orange-400"
                placeholder="0" maxlength="1"
              />
              <input
                type="otp"
                className="bg-white bottom-2 w-16 text-black text-2xl h-17 p-3.5 shadow-md 
                shadow-neutral-300 flex rounded-md text-center m-6 focus:border-orange-400"
                placeholder="0" maxlength="1"
              />
              <input
                type="otp"
                className="bg-white bottom-2 w-16 text-black text-2xl h-17 p-3.5 shadow-md
                 shadow-neutral-300 flex rounded-md text-center m-6 focus:border-orange-400"
                placeholder="0" maxlength="1"
              />
            </div>
          </form>
        </div>

        <div className="flex mt-6">
          <h1 className="text-center text-xl text-bold text-gray-500 text-black-200 font-nunito m-auto">
            I don’t recevie a code!
            <Link  className="ml-3 text-orange-600 underline">
              Please resend
            </Link>
          </h1>
        </div>
        <div className="mt-8">
          <Link to="/Registration">
          <button className="text-2xl font-nunito rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 flex justify-center m-auto px-20">
            Verification
          </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Verification;
