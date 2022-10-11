import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/styles/auth.moudle.css";
import { FcGoogle } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

const Welcome = () => {
  // goto signin
  
  let navigate = useNavigate();
  function toSignin(e) {
    e.preventDefault();
    let path ="/LoginUser";
    navigate(path)
  }

  return (
    <div className="max-w-lg h-screen bg-images">
      <div className="skip-btn relative">
        <Link>
          <button className="py-2 px-4 mt-5 absolute left-80 bg-white opacity-30 hover:text-white text-black text-xl font-samibold rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-60">
            Skip
          </button>
        </Link>
      </div>
      <div className="absolute m-5 top-52">
        <h1 className="text-5xl font-sans text-white mb-4">Welcome to</h1>
        <span className="text-6xl text-orange-500 font-semibold">FoodHub</span>
        <p className="text-ml mt-3 text-gray-400">
          Your favourite foods delivered fast at your door.
        </p>
      </div>
      {/* btns */}
      <div>
        <div>
            <h1 className="text-center absolute inset-x-0 bottom-0 h-80 text-gray-300 text-xl"> 
            Sign in with</h1>
        </div>
        <div>
            <div>
                <button className="py-4 px-4 absolute bottom-44 m-6 left-0 h-16
                 bg-white hover:text-white text-PrimaryOrange 
                 font-samibold rounded-lg shadow-md hover:bg-orange-500 
                 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl
                 focus:ring-opacity-60 w-40 flex justify-around
                 "><FcAbout color="white" fontSize="1.5em"/> Facebook</button>
                 <button className="py-4 px-4 absolute bottom-44 m-6 right-0 h-16 
                 bg-white hover:text-white text-PrimaryOrange 
                 font-samibold rounded-lg shadow-md hover:bg-orange-500 
                 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl
                 focus:ring-opacity-60 w-40 flex justify-around">  <FcGoogle color="white" fontSize="1.5em"/>Google</button>
            </div>
            <div>
            <Link to="/Signup">
            <button className=" max-w-lg py-6 px-7 absolute bottom-16 m-6 right-0 left-0 
                 bg-gray-700 opacity-70 hover:text-white text-white  
                 font-samibold rounded-lg shadow-md hover:bg-orange-500 
                 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl
                 focus:ring-opacity-60 w-70"> Start with email or phone
            </button></Link>
            </div>
            <div>
                <h1 className="text-center text-xl text-zinc-200 absolute bottom-10 right-0 left-0 h-100  ">Already have an account? 
                    <button to="/" onClick={toSignin} className="ml-2 text-orange-400 underline">Sign In</button>
                </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
