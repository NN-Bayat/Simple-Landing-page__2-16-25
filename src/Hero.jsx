import React from "react";
import image1 from "./assets/s1.jpg";
import image2 from "./assets/s2.jpg";
import image3 from "./assets/s3.jpg";
import image4 from "./assets/s4.jpg";

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between px-6 lg:px-24 items-center mt-5 lg:p-16">
        {/* Content on left side */}
        <div className="lg:w-1/2 text-center lg:text-left font-bold">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-[#1fcbff]">Empower</span> Your Future With
            Cutting Edge <span className="text-[#1fcbff]">Skills</span>
          </h1>
          <p className="text-gray-500 mt-6 lg:text-lg">
            Unlock your potential with courses designed to help you thrive in
            the digital age. From coding to creative arts, we provide the tools
            you need to succeed.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start gap-4 text-xl">
            <a
              href="#"
              className="bg-[#1fcbff] text-white pb-2.5 pt-3 px-5 rounded-xl font-semibold transition hover:bg-gray-700"
            >
              Enroll Now
            </a>
            <a
              href="#"
              className="border-2 border-[#1fcbff] text-[#1fcbff] pt-2.5 pb-3 px-5 rounded-xl font-semibold hover:bg-[#1fcbff] hover:text-white transition"
            >
              Explore Courses
            </a>
          </div>
        </div>
        {/* Images on right side */}
        <div className="flex flex-col lg:w-1/2 items-center my-16 lg:my-0">
          <div className="flex gap-2">
            <img
              src={image1}
              className="w-60 h-64 rounded-tr-[100px] rounded-bl-[100px] object-cover"
            />
            <img
              src={image2}
              className="w-60 h-64 rounded-br-[100px] rounded-tl-[100px] object-cover"
            />
          </div>
          <div className="flex gap-2 mt-2 lg:border-t-2 lg:border-[#7b979f] pt-2">
            <img
              src={image3}
              className="w-60 h-64 rounded-br-[100px] rounded-tl-[100px] object-cover"
            />
            <img
              src={image4}
              className="w-60 h-64 rounded-bl-[100px] rounded-tr-[100px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
