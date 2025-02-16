import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around items-center lg:p-4 py-3 md:bg-white bg-[#1fcbff]">
        <div className="text-2xl font-bold transform hover:scale-110 transition-all duration-400 cursor-pointer">
          <h2>Educative</h2>
        </div>
        <div className="hidden md:flex">
          <ul className="flex flex-row gap-10">
            <li className="text-lg font-semibold text-[#1fcbff] transition-all duration-200 cursor-pointer">
              Home
            </li>
            <li className="text-lg font-semibold hover:text-[#1fcbff] transition-all duration-200 cursor-pointer">
              About
            </li>
            <li className="text-lg font-semibold hover:text-[#1fcbff] transition-all duration-200 cursor-pointer">
              Services
            </li>
            <li className="text-lg font-semibold hover:text-[#1fcbff] transition-all duration-200 cursor-pointer">
              Projects
            </li>
          </ul>
        </div>
        <div>
          <button className="mt-0 py-3 px-8  md:bg-[#1fcbff] md:text-white font-semibold rounded-full hover:bg-gray-700 transition bg-white text-[#1fcbff]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
