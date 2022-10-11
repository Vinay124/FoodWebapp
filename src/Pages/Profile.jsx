import React from "react";
import profilesvg from "../assets/images/profilesvg.png";
import { FiChevronLeft } from "react-icons/fi";
import UserIcon from "../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

  let navigate = useNavigate();
  function backTMainpage(e) {
    e.preventDefault();
    let path = "/home"
    navigate(path)
  }

  return (
    <div className="max-w-lg h-screen">
      <div className="relative">
        <button onClick={backTMainpage}
          className=" outline:none border-none cursor-pointer hover:bg-slate-300 absolute top-14 bg-white w-10 h-15 p-1.5 hover:text-black 
        shadow-md flex rounded-md text-center ml-6"
        >
          <FiChevronLeft fontSize="2em" className="text-orange-500" />
        </button>
      </div>
      <div>
        <img src={profilesvg} alt="profilesvg" className="w-full" />
      </div>
      <img
        src={UserIcon}
        className="w-24 absolute inset-x-44 inset-y-44 border border-red-600 rounded-full"
        alt=""
      />
      <h1 className="absolute inset-x-40 inset-y-72 font-nunito text-2xl font-semibold">
        Eljad Eendaz
      </h1>
      <p className="absolute inset-x-44 inset-y-80 font-nunito text-xl text-orange-400">
        Edit Profile
      </p>

      {/* forms */}
      <div>
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
          <Link to="/AddAddress" className=" font-nunito text-ml font-semibold ml-8 capitalize text-orange-500 underline">
            Add new address
          </Link>
          <button
            type="submit"
            className="text-2xl font-nunito rounded-3xl bg-transprent border border-orange-500 hover:bg-orange-700 text-orange-400 font-bold py-5 mt-10 flex justify-center m-auto px-20"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
