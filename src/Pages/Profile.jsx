import React from "react";
import profilesvg from "../assets/images/profilesvg.png";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Profile;
