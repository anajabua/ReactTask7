import React from "react";
import dotsImg from "./assets/Combined Shape.png";

interface CardProps {
  title: string;
  hours: string;
  last: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, hours, last, bgColor }) => {
  return (
    <div className="relative w-64 h-52 rounded-xl overflow-hidden cursor-pointer hover:bg-[#33397A]">
      <div className={`h-14 w-full ${bgColor}`}></div>
      <div className="bg-[#1C204B] p-6 rounded-2xl relative -top-6 flex flex-col">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-normal">{title}</h3>
          <img src={dotsImg} alt="dots" className="cursor-pointer" />
        </div>
        <div className="mt-5 text-4xl font-light">{hours}</div>
        <div className="mt-2 text-sm text-[#C2C2FF]">Last Week - {last}</div>
      </div>
    </div>
  );
};

export default Card;