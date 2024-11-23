"use client";
/* eslint-disable react/no-unescaped-entities */
import { useGetDesignation } from "@/hooks/getDesignation.hook";
import Image from "next/image";
import React, { useEffect } from "react";

const Designation: React.FC = () => {
  const {
    mutate: getDesignation,
    data,
    isError,
    isSuccess,
  } = useGetDesignation();

  useEffect(() => {
    getDesignation();
  }, [getDesignation]);

  // Fallback for designation title
  const designationTitle = data?.data?.designationTitle || "Web Developer";

  return (
    <section className="relative bg-gradient-to-br from-[#05021d] to-[#5e0a99] text-[#e3e2fd] py-20 px-8 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="text-[#9d98f0]">Rashed Uzzaman Reshad</span>
          </h1>

          {/* Error Message */}
          {isError && (
            <p className="text-xl mt-4 text-red-500">
              Failed to load designation. Please try again later.
            </p>
          )}

          {/* Success Content */}
          {isSuccess && (
            <>
              <p className="text-xl mt-4">
                A dedicated{" "}
                <span className="font-semibold text-[#9d98f0]">
                  {designationTitle}
                </span>{" "}
                with expertise in{" "}
                <span className="font-semibold text-[#9d98f0]">
                  building modern web applications
                </span>
                . I love crafting impactful solutions that make a difference.
              </p>
              <p className="mt-6">
                <a
                  href="https://drive.google.com/file/d/1QV0JFOYJJsS6BFZGXM1vnd1kJz7WT2oN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#9d98f0] text-[#05021d] py-3 px-6 rounded-lg shadow-md hover:bg-[#d182e3] transition duration-300"
                >
                  RESUME
                </a>
              </p>
            </>
          )}
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Profile Image */}
            <Image
              src="/images/reshad.jpg"
              alt="Profile picture of Rashed Uzzaman Reshad"
              width={300}
              height={300}
              className="rounded-full shadow-xl"
            />

            {/* Minimal Caption */}
            {isSuccess && (
              <div className="text-center mt-6">
                <h3 className="text-2xl font-semibold text-[#9d98f0]">
                  {designationTitle}
                </h3>
                <p className="text-lg text-gray-300 mt-2">
                  Specializing in modern web applications
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designation;
