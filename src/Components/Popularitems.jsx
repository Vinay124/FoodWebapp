import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { RiRidingLine } from "react-icons/ri";
import { RiTimerFlashLine } from "react-icons/ri";
import { GiRoundStar } from "react-icons/gi";
import { AiTwotoneHeart } from "react-icons/ai";

import Mcburger from "../assets/images/food.png";
import noodles from "../assets/images/noodles.png";
import pizza2 from "../assets/images/pizza2.png";

const Popularitems = () => {
  return (
    <div>
      <div className=" grid grid-cols-2">
        <div className="relative h-auto mr-3 mt-6">
          <img src={noodles} className="rounded-xl " alt="/" />
          <h1 className="flex absolute top-2 ml-2 py-2 px-3 font-nunito text-sm rounded-xl items-center bg-white">
            ₹ 500.00
          </h1>
          <div>
            <div className="bg-orange-500 absolute top-2 right-0 left-36 flex items-center justify-center w-8 h-8 rounded-full">
              <AiTwotoneHeart
                className="text-white hover:text-red-500"
                fontSize="1.3em"
              />
            </div>
            <div>
              <h1 className="flex absolute top-36 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
                4.5
                <GiRoundStar
                  className="my-2 mx-2 text-orange-300"
                  fontSize="1.2em"
                />
                <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            </div>
            <div className="mt-7">
              <h1 className="mt-4 mb-1 mx-2 font-nunito text-xl">
                Salmon Salad
              </h1>
              <p className="mx-2 font-nunito text-ml text-GrayColor">
                Baked salmon fish
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-auto mr-3 mt-6">
          <img src={pizza2} className="rounded-xl " alt="/" />
          <h1 className="flex absolute top-2 ml-2 py-2 px-3 font-nunito text-sm rounded-xl items-center bg-white">
            ₹ 500.00
          </h1>
          <div>
            <div className="bg-orange-500 absolute top-4 right-0 left-36 flex items-center justify-center w-8 h-8 rounded-full">
              <AiTwotoneHeart
                className="text-white hover:text-red-500"
                fontSize="1.3em"
              />
            </div>
            <div>
              <h1 className="flex absolute top-36 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
                4.5
                <GiRoundStar
                  className="my-2 mx-2 text-orange-300"
                  fontSize="1.2em"
                />
                <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            </div>
            <div className="mt-7">
              <h1 className="mt-4 mb-1 mx-2 font-nunito text-xl">
                Salmon Salad
              </h1>
              <p className="mx-2 font-nunito text-ml text-GrayColor">
                Baked salmon fish
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-auto mr-3 mt-6">
          <img src={pizza2} className="rounded-xl " alt="/" />
          <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-sm rounded-xl items-center bg-white">
            ₹ 500.00
          </h1>
          <div>
            <div className="bg-orange-500 absolute top-4 right-0 left-36 flex items-center justify-center w-8 h-8 rounded-full">
              <AiTwotoneHeart
                className="text-white hover:text-red-500"
                fontSize="1.3em"
              />
            </div>
            <div>
              <h1 className="flex absolute top-36 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
                4.5
                <GiRoundStar
                  className="my-2 mx-2 text-orange-300"
                  fontSize="1.2em"
                />
                <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            </div>
            <div className="mt-7">
              <h1 className="mt-4 mb-1 mx-2 font-nunito text-xl">
                Salmon Salad
              </h1>
              <p className="mx-2 font-nunito text-ml text-GrayColor">
                Baked salmon fish
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-auto mr-3 mt-6">
          <img src={noodles} className="rounded-xl " alt="/" />
          <h1 className="flex absolute top-4 ml-3 py-2 px-3 font-nunito text-sm rounded-xl items-center bg-white">
            ₹ 500.00
          </h1>
          <div>
            <div className="bg-orange-500 absolute top-4 right-0 left-36 flex items-center justify-center w-8 h-8 rounded-full">
              <AiTwotoneHeart
                className="text-white hover:text-red-500"
                fontSize="1.3em"
              />
            </div>
            <div>
              <h1 className="flex absolute top-36 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
                4.5
                <GiRoundStar
                  className="my-2 mx-2 text-orange-300"
                  fontSize="1.2em"
                />
                <span className="text-gray-400 font-nunito text-ml">(25+)</span>
              </h1>
            </div>
            <div className="mt-7">
              <h1 className="mt-4 mb-1 mx-2 font-nunito text-xl">
                Salmon Salad
              </h1>
              <p className="mx-2 font-nunito text-ml text-GrayColor">
                Baked salmon fish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularitems;
