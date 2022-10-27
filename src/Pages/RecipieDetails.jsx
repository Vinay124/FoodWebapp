import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../Components/Header/Header'
import Burger from "../assets/images/burgerview.png";
import { FiChevronLeft } from 'react-icons/fi'
import { AiTwotoneHeart } from 'react-icons/ai'
import { GiRoundStar } from 'react-icons/gi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Food1 from '../assets/images/food1.png'
import Food2 from '../assets/images/food2.png'
import Food3 from '../assets/images/food3.png'
import {BsBasket3} from 'react-icons/bs'

const RecipieDetails = () => {

  let navigate = useNavigate();
  function toBack(e) {
    e.preventDefault();
    let path = "/Home";
    navigate(path);
  }

  return (
    <>
      <div className="max-w-lg min-h-screen">
        <div className="relative">
          <button onClick={toBack}
            className="absolute outline:none border-none cursor-pointer hover:bg-slate-300 top-6 bg-white w-10 h-15 p-1.5 hover:text-black 
        shadow-md flex rounded-md text-center ml-6"
          >
            <FiChevronLeft fontSize="2em" className="text-orange-500" />
          </button>
          <div className="w-full top-2 right-10 relative">
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5  w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em" />
            </div>
          </div>
        </div>
        <div>
          <img src={Burger} className="p-3 flex justify-center m-auto mt-3" alt="" />
        </div>
        {/* main */}
        <div>
          <h1 className=" font-nunito text-3xl ml-9 mt-3 font-semibold">Ground Beef Tacos</h1>
          <div className="flex text-center ml-7 mt-3">
            <GiRoundStar className="my-1 mx-1 text-orange-300" fontSize="1.2em" />
            <div className="flex">
              <span className="font-bold">4.5</span>
              <span className="text-gray-500 mx-2"> (30+)</span>
              <span className="text-orange-500">See Review</span>
            </div>
          </div>
        </div>
        {/* pricetags */}
        <div>
          <div className="flex items-baseline justify-around mt-4">
            <div className="flex items-baseline">
              <h1 className="text-ml font-nunito font-bold text-orange-400 mr-1">₹</h1>
              <h1 className="text-2xl font-bold font-nunito">599</h1>
            </div>
            <div className="flex">
              <button className="">
                <AiFillPlusCircle fontSize="1.2em" className="text-orange-500 font-nunito text-1xl" />
              </button>
              <h1 className="text-xl font-nunito font-bold mx-2 text-slate-500">01</h1>
              <button className="">
                <AiOutlinePlusCircle className=" text-slate-400 font-nunito text-1xl" fontSize="1.2em" />
              </button>
            </div>
          </div>
          <div className="text-1xl text-slate-400 font-nunito text-semibold mx-5 my-2">
            <p className="w-96 m-auto">
              Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.
            </p>
          </div>
          {/* add on  */}
          <div>
            <h1 className="mx-4 text-xl font-semibold my-4 font-nunito ">Choice of Add On</h1>
            <div>
              <div className="flex justify-between items-center mx-4">
                <img src={Food1} alt="" className=" w-16" />
                <h1 className="text-xl font-normal font-nunito">Pepper  Julienned</h1>
                <h1 className="text-sm font-normal font-nunito">+₹50.00</h1>
                <div>
                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <div class="items-center h-5 flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center mx-4">
                <img src={Food2} alt="" className=" w-16" />
                <h1 className="text-xl font-normal font-nunito">Baby Spinach</h1>
                <h1 className="text-sm font-normal font-nunito">+₹100.00</h1>
                <div>
                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <div class="items-center h-5 flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between align-baseline items-center mx-4">
                <img src={Food3} alt="" className=" w-16" />
                <h1 className="text-xl font-normal font-nunito">Masroom</h1>
                <h1 className="text-sm font-normal font-nunito">+₹80.00</h1>
                <div>
                  <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <div class="items-center h-5 flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="helper-checkbox-1" aria-describedby="helper-checkbox-text-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-10">
              <button className="uppercase mt-4 relative text-1xl font-nunito items-center rounded-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 flex justify-center m-auto px-3">
              <div className="rounded-full p-3 bg-white text-orange-500 text-ml mr-5">
              <BsBasket3/>
              </div>
              Add to Cart
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default RecipieDetails;
