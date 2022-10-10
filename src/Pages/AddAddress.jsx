import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddAddress = () => {
  return (
    <div className="max-w-lg">
      <div className="relative">
        <button
          className="absolute outline:none border-none cursor-pointer hover:bg-slate-300 top-6 bg-white w-10 h-15 p-1.5 hover:text-black 
        shadow-md flex rounded-md text-center ml-6"
        >
          <FiChevronLeft fontSize="2em" className="text-orange-500" />
        </button>
        <span className="w-full absolute top-10  font-nunito font-semibold text-xl inset-x-36">
          Add new address
        </span>
      </div>

      <div>
        <form>
          <div className="pt-28 m-5">
            <label className="text-xl font-nunito">Full name</label>
            <input
              type="text"
              placeholder="Eljad Eendaz"
              value=" Eljad Eendaz"
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500 outline-orange-500"
            />
          </div>
          <div className="m-5">
            <label className="text-xl font-nunito">Phone Number</label>
            <input
              type="text"
              placeholder="+1 (783) 0986 8786"
              value="+1 (783) 0986 8786"
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500 outline-orange-500"
            />
          </div>
          {/* <div class="flex justify-center">
            <div class="w-full m-6">
            <label className="text-xl font-nunito">State</label>
              <select
                className="form-select 
                flex  p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500 outline-orange-500"
                aria-label="Default select example"
              >
                <option selected className="">Slect State</option>
                <option value="1">Bangalore</option>
                <option value="2">Chennai</option>
                <option value="3">Hyderabad</option>
              </select>
            </div>
          </div> */}
          <div class="flex justify-center">
            <div class="w-full m-5">
            <label className="text-xl font-nunito">City</label>
              <select
                className="form-select 
                flex  p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500 outline-orange-500"
                aria-label="Default select example"
              >
                <option selected className="">Slect City</option>
                <option value="1">Bangalore</option>
                <option value="2">Chennai</option>
                <option value="3">Hyderabad</option>
              </select>
            </div>
          </div>
          <div className="m-5">
            <label className="text-xl font-nunito">Street (Include house number)</label>
            <input
              type="text"
              placeholder="Street"
              
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500 outline-orange-500"
            />
          </div>
          
          <button
            type="submit"
            className="text-2xl font-nunito rounded-3xl bg-orange-600 border 
            border-orange-500 hover:bg-orange-700 text-white 
            font-bold py-5 mt-10 flex justify-center m-auto px-32"
          >
            Save
          </button>
        </form>
      </div>

      {/* <div className="mt-40">
        <form>
          <div className="m-6">
            <label className="text-xl font-nunito">Full name</label>
            <input
              type="text"
              placeholder="Eljad Eendaz"
              value=" Eljad Eendaz"
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl focus:border-orange-500 border-gray-200 focus:border-orange-500"
            />
          </div>
          <div className="m-6">
            <label className="text-xl font-nunito">E-mail</label>
            <input
              type="email"
              placeholder="prelookstudio@gmail.com"
              value="prelookstudio@gmail.com"
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500"
            />
          </div>
          <div className="m-6">
            <label className="text-xl font-nunito">Phone Number</label>
            <input
              type="text"
              placeholder="+1 (783) 0986 8786"
              value="+1 (783) 0986 8786"
              className="flex mt-2 p-5 w-full rounded-2xl border text-xl border-gray-200 focus:border-orange-500"
            />
          </div>
          <Link className=" font-nunito text-ml font-semibold ml-8 capitalize text-orange-500 underline">
            Add new address
          </Link>
          <button
            type="submit"
            className="text-2xl font-nunito rounded-3xl bg-transprent border border-orange-500 hover:bg-orange-700 text-orange-400 font-bold py-5 mt-10 flex justify-center m-auto px-20"
          >
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default AddAddress;
