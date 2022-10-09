import React from "react";
import Card from "./Card";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div>
      <Card
        title="Sign Up">
        <div>
        <form autocomplete="off">
           <div className="m-6">
            <label className="text-xl font-nunito">Full Name</label>
            <input type="text" placeholder="Enter Your Name"
             className="flex mt-2 p-5 w-full rounded border text-xl border-gray-200 focus:ring-slate-300"/>
           </div>
           <div className="m-6">
            <label className="text-xl font-nunito">E-mail</label>
            <input type="email" placeholder="Enter Your E-mail"
             className="flex mt-2 p-5 w-full rounded border text-xl border-gray-200 focus:ring-slate-300"/>
           </div>
           <div className="m-6">
            <label className="text-xl font-nunito">Password</label>
            <input type="password" placeholder="Enter Your Password"
            className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:ring-slate-300"/>
           </div>
        </form>
        <div className="mt-4">
            <Link to="/LoginUser">
            <button className="uppercase text-2xl font-nunito rounded-2xl bg-orange-500 hover:bg-orange-700 
            text-white font-bold py-5 flex justify-center m-auto px-20">Sign Up</button></Link>
        </div>
        <div>
            <div className="flex mt-6">
            <h1 className="text-center text-xl text-semibold text-black-200 font-nunito m-auto">Already have an account?
                <Link className="ml-3 text-orange-600 underline">Login</Link>
            </h1>
            </div>
            <div className="mt-6 mb-6">
                <h1 className="text-center text-xl font-nunito mb-10 border p-2 border-slate-200">Sign Up With</h1>
            <button className="py-6 px-16 rounded-3xl bg-white border shadow-lg 
            flex align-middle text-xl m-auto hover:bg-orange-500 hover:text-white">  
                 <FcGoogle color="white" className="mr-5" fontSize="1.5em"/>Google</button>
            </div>
            
        </div>
      </div>
      </Card>
    </div>
  );
};

export default Signup;
