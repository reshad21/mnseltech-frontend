/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Designation: React.FC = () => {
  const imageUrl = "https://tinyurl.com/4ub3spue"; // Direct image URL from Google Drive
  return (
    <section className="relative bg-gradient-to-br from-[#05021d] to-[#5e0a99] text-[#e3e2fd] py-20 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="text-[#9d98f0]">Rashed Uzzaman Reshad</span>
          </h1>
          <p className="text-xl mt-4">
            A dedicated{" "}
            <span className="font-semibold text-[#9d98f0]">Web Developer</span>{" "}
            with expertise in{" "}
            <span className="font-semibold text-[#9d98f0]">
              building modern web applications
            </span>
            . I love crafting impactful solutions that make a difference.
          </p>
          <p className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-[#9d98f0] text-[#05021d] py-3 px-6 rounded-lg shadow-md hover:bg-[#d182e3] transition duration-300"
            >
              RESUME
            </a>
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#5e0a99] to-[#d182e3] rounded-full blur-lg opacity-70"></div>
            <Image
              src={imageUrl}
              alt="Your Profile"
              width={400}
              height={400}
              className="relative z-10 w-64 h-64 mx-auto lg:mx-0 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designation;
