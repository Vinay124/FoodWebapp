import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiRidingLine } from "react-icons/ri";
import { RiTimerFlashLine } from "react-icons/ri";
import {GiRoundStar} from 'react-icons/gi'
import {AiTwotoneHeart} from 'react-icons/ai'

// dish cardimage
import Mcburger from "../assets/images/food.png";
import Paneer from "../assets/images/paneer.png";
import Pizzza from "../assets/images/pizzza.png";

const Cards = () => {
  return (
    <div>
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-xl font-nunito">Featured Restaurants</h1>
          <Link className="flex  justify-center items-center mr-2 font-nunito text-ml text-orange-400">
            View All <IoIosArrowForward fontSize="1.3em" className="ml-2" />
          </Link>
        </div>
        {/* food card */}
        <div className="overflow-x-auto flex ">
        <div className="max-h-full mr-8">
          <div className="mt-7 relative">
            <img src={Mcburger} className="w-full" alt="/" />
            <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">4.5 
              <GiRoundStar className="my-2 mx-2 text-orange-300" fontSize="1.2em"/>  
              <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5 w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em"/>
            </div>
          </div>
          <div className="rounded-b-lg">
            <div>
              <h1 className="flex items-center mx-5 py-4 font-nunito text-2xl font-bold">
                McDonald’s
                <BsPatchCheckFill className="ml-4 text-green-600" fontSize="1em" />
              </h1>
            </div>
            <div className="flex mx-6 py-2">
              <h1 className="font-nunito font-medium flex items-center text-gray-400">
                <RiRidingLine className="text-2xl text-orange-500 mr-3" />
                Free delivery
              </h1>
              <span className="ml-5 font-nunito font-medium text-gray-400 flex items-center">
                <RiTimerFlashLine className="text-2xl text-orange-500 mr-3" />
                10-15 mins
              </span>
            </div>
            <div className="flex mx-6 py-3">
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Burger
              </button>
              <button className="py-2 px-2 outline-none mx-9 rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Chicken
              </button>
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                FastFood
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-full mr-8">
          <div className="mt-7 relative">
            <img src={Paneer} className="w-full" alt="/" />
            <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">4.5 
              <GiRoundStar className="my-2 mx-2 text-orange-300" fontSize="1.2em"/>  
              <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5  w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em"/>
            </div>
          </div>
          <div className="rounded-b-lg">
            <div>
              <h1 className="flex items-center mx-5 py-4 font-nunito text-2xl font-bold">
                McDonald’s
                <BsPatchCheckFill className="ml-4 text-green-600" fontSize="1em" />
              </h1>
            </div>
            <div className="flex mx-6 py-2">
              <h1 className="font-nunito font-medium flex items-center text-gray-400">
                <RiRidingLine className="text-2xl text-orange-500 mr-3" />
                Free delivery
              </h1>
              <span className="ml-5 font-nunito font-medium text-gray-400 flex items-center">
                <RiTimerFlashLine className="text-2xl text-orange-500 mr-3" />
                10-15 mins
              </span>
            </div>
            <div className="flex mx-6 py-3 mb-5">
            <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Burger
              </button>
              <button className="py-2 px-2 mx-9 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Chicken
              </button>
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                FastFood
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-full mr-8 relative">
          <div className="mt-7 relative">
            <img src={Mcburger} className="w-full" alt="/" />
            <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">4.5 
              <GiRoundStar className="my-2 mx-2 text-orange-300" fontSize="1.2em"/>  
              <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5  w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em"/>
            </div>
          </div>
          <div className="rounded-b-lg">
            <div>
              <h1 className="flex items-center mx-5 py-4 font-nunito text-2xl font-bold">
                McDonald’s
                <BsPatchCheckFill className="ml-4 text-green-600" fontSize="1em" />
              </h1>
            </div>
            <div className="flex mx-6 py-2">
              <h1 className="font-nunito font-medium flex items-center text-gray-400">
                <RiRidingLine className="text-2xl text-orange-500 mr-3" />
                Free delivery
              </h1>
              <span className="ml-5 font-nunito font-medium text-gray-400 flex items-center">
                <RiTimerFlashLine className="text-2xl text-orange-500 mr-3" />
                10-15 mins
              </span>
            </div>
            <div className="flex mx-6 py-3 mb-5">
            <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Burger
              </button>
              <button className="py-2 px-2 mx-9 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Chicken
              </button>
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                FastFood
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-full mr-8">
          <div className="mt-7 relative">
            <img src={Pizzza} className="w-full" alt="/" />
            <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">4.5 
              <GiRoundStar className="my-2 mx-2 text-orange-300" fontSize="1.2em"/>  
              <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5  w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em"/>
            </div>
          </div>
          <div className="rounded-b-lg">
            <div>
              <h1 className="flex items-center mx-5 py-4 font-nunito text-2xl font-bold">
              Starbuck 
                <BsPatchCheckFill className="ml-4 text-green-600" fontSize="1em" />
              </h1>
            </div>
            <div className="flex mx-6 py-2">
              <h1 className="font-nunito font-medium flex items-center text-gray-400">
                <RiRidingLine className="text-2xl text-orange-500 mr-3" />
                Free delivery
              </h1>
              <span className="ml-5 font-nunito font-medium text-gray-400 flex items-center">
                <RiTimerFlashLine className="text-2xl text-orange-500 mr-3" />
                10-15 mins
              </span>
            </div>
            <div className="flex mx-6 py-3 mb-5">
            <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Burger
              </button>
              <button className="py-2 px-2 mx-9 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Chicken
              </button>
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                FastFood
              </button>
            </div>
          </div>
        </div>
        <div className="max-h-full">
          <div className="mt-7 relative">
            <img src={Mcburger} className="w-full" alt="/" />
            <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">4.5 
              <GiRoundStar className="my-2 mx-2 text-orange-300" fontSize="1.2em"/>  
              <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            <div className="bg-orange-500 absolute top-4 right-0 flex items-center justify-center mr-5  w-10 h-10 rounded-full">
              <AiTwotoneHeart className="text-white hover:text-red-500" fontSize="1.8em"/>
            </div>
          </div>
          <div className="rounded-b-lg">
            <div>
              <h1 className="flex items-center mx-5 py-4 font-nunito text-2xl font-bold">
                McDonald’s
                <BsPatchCheckFill className="ml-4 text-green-600" fontSize="1em" />
              </h1>
            </div>
            <div className="flex mx-6 py-2">
              <h1 className="font-nunito font-medium flex items-center text-gray-400">
                <RiRidingLine className="text-2xl text-orange-500 mr-3" />
                Free delivery
              </h1>
              <span className="ml-5 font-nunito font-medium text-gray-400 flex items-center">
                <RiTimerFlashLine className="text-2xl text-orange-500 mr-3" />
                10-15 mins
              </span>
            </div>
            <div className="flex mx-6 py-3 mb-5">
            <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Burger
              </button>
              <button className="py-2 px-2 mx-9 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                Chicken
              </button>
              <button className="py-2 px-2 outline-none rounded text-ml text-gray-500 font-nunito bg-gray-200 hover:bg-orange-400 hover:text-white capitalize">
                FastFood
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Cards