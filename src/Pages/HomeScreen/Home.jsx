import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import UserIcon from "../../assets/images/user.png";
// images
import Burger from "../../assets/images/burger.png";
import Asian from "../../assets/images/asian.png";
import donet from "../../assets/images/donet.png";
import Mexican from "../../assets/images/mexican.png";
import Pizza from "../../assets/images/pizza.png";
// dish cardimage
import Cards from "../../Components/Cards";
import Popularitems from "../../Components/Popularitems";
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
    <>
    <div className="max-w-lg h-screen bg-white m-5 ">
      <div className="flex justify-between items-cente">
        <HiOutlineMenuAlt3 fontSize="2.5em" />
        <div>
          <h1 className="text-center font-nunito text-xl justify-center text-gray-400 flex items-center">
            Deliver to
            <HiChevronDown />
          </h1>
          <span className="text-md font-bold font-nunito text-orange-500 ">
            4102 Pretty View Lane
          </span>
        </div>
        <div>
          <Link to="/Profile">
          <img
            src={UserIcon}
            alt=""
            className="w-14 border border-red-500 rounded-full"
          />
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl max-w-sm font-nunito font-semibold">
          What would you like to order
        </h1>
      </div>
      {/* form */}
      <div>
        <form>
          <div className="relative mt-5">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full rounded-lg border-gray-300
        dark:text-black font-nunito text-md border outline-none"
              placeholder="Find for food or restaurant..."
              required
            />
            <button
              className="text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover-bg-blue-800 focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium 
        rounded-lg text-sm px-4 py-2 dark:bg-orange -600 
        dark:hover:bg-orange-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="m-2  flex justify-between overflow-x-auto">
        <div className="mt-7 mr-5 bg-orange-400 w-20 p-2 h-32 rounded-full hover:bg-orange-400">
          <img src={Burger} className=" w-20" alt="/" />
          <span className="font-nunito text-xl text-black hover:text-white">
            Burger
          </span>
        </div>
        <div className="mt-7 mr-5 bg-gray-100 w-20 p-4 h-32 rounded-full hover:bg-orange-400">
          <img src={Asian} className=" w-20" alt="/" />
          <span className="font-nunito text-xl text-black hover:text-white">
            Donat
          </span>
        </div>
        <div className="mt-7 mr-5 bg-gray-100 w-20 p-4 h-32 rounded-full hover:bg-orange-400">
          <img src={donet} className=" w-20" alt="/" />
          <span className="font-nunito text-xl  text-black hover:text-white">
            Pizza
          </span>
        </div>
        <div className="mt-7 mr-5 bg-gray-100 w-20 p-4 h-32 rounded-full hover:bg-orange-400">
          <img src={Mexican} className="w-23" alt="/" />
          <span className="font-nunito text-ml text-black hover:text-white">
            Mexican
          </span>
        </div>
        <div className="mt-7 mr-5 bg-gray-100 w-20 p-4 h-32 rounded-full hover:bg-orange-400">
          <img src={Pizza} className=" w-20" alt="/" />
          <span className="font-nunito text-xl text-black hover:text-white">
            Donat
          </span>
        </div>
        <div className="mt-7 mr-5 bg-gray-100 w-20 p-4 h-32 rounded-full hover:bg-orange-400">
          <img src={Pizza} className=" w-20" alt="/" />
          <span className="font-nunito text-xl text-black hover:text-white">
            Burger
          </span>
        </div>
      </div>

      {/* burger */}
      <Cards/>

      {/* popular items */}
      <Popularitems/>
    </div>
    <Header/> 
    </>
  );
};

export default Home;
