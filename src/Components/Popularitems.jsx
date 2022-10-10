import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { AiTwotoneHeart } from "react-icons/ai";
import noodles from "../assets/images/noodles.png";
import pizza2 from "../assets/images/pizza2.png";

const Popularitems = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-nunito mx-2 mt-5 font-semibold">Popular Items</h1>
        <div className="grid gap-x-8 gap-y-2 grid-cols-2 mt-4">
        <div className="relative h-auto">
          <img src={noodles} className="rounded-xl w-52" alt="/" />
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
              <h1 className="flex absolute top-44 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
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
        <div className="relative h-auto">
          <img src={pizza2} className="rounded-xl w-52" alt="/" />
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
              <h1 className="flex absolute top-44 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
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
        <div className="relative h-auto mt-4">
          <img src={pizza2} className="rounded-xl w-52" alt="/" />
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
              <h1 className="flex absolute top-44 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
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
        <div className="relative h-auto mt-4">
          <img src={noodles} className="rounded-xl w-52" alt="/" />
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
              <h1 className="flex absolute top-44 ml-1 py-2 px-3 font-nunito text-ml rounded-xl items-center bg-white">
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
      
    </div>
  );
};

export default Popularitems;
