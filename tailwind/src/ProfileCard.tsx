import React from "react";
import profileImg from "./assets/11461c31cbf462c40915d00fed799ae40feb5c77.png";
interface ProfileCardProps {
  name: string; 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    <div className="w-72 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="flex items-center p-5 bg-[#5747EA] text-white">
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
        />
        <div className="ml-4">
          <p className="text-sm opacity-80">Report for</p>
          <h2 className="text-lg">{name}</h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#1C204B] py-12">
        <div className="ml-5 mt-4 cursor-pointer hover:text-white">Daily</div>
        <div className="ml-5 mt-4 font-semibold text-white cursor-pointer">Weekly</div>
        <div className="ml-5 mt-4 cursor-pointer hover:text-white">Monthly</div>
      </div>
    </div>
  );
};