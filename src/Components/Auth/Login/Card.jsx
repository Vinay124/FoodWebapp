import React from "react";
import rightArrow from "../../../assets/images/rightarrow.png";
import leftArrow from "../../../assets/images/leftarrow.png";

const Card = ({ title, children }) => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={leftArrow} alt="/" />
        <img src={rightArrow} alt="/" />
      </div>
      <div>
        <h1 className="text-5xl m-7 font-nunito font-semibold">{title}</h1>
      </div>
      {children}
      
    </div>
  );
};

export default Card;
