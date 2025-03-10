import React from "react";
import { twMerge } from "tailwind-merge";


const Button = ({ className, children, isBordered, link = ""}) => {

  return (
    <button
    onClick={() => window.location.href = link}
      className={twMerge(
        `flex items-center gap-3 px-4 sm:px-5 py-3 rounded-md ${isBordered ? "bg-transparent text-white border hover:text-black hover:bg-white" : "bg-white text-black hover:text-white hover:bg-[#343434]"} text-xs sm:text-base group   duration-300 font-medium`,
        className
      )}
    >
      {/* arrow icon */}
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${isBordered? "stroke-white group-hover:stroke-black" : "stroke-black group-hover:stroke-white" }  size-3 sm:size-4  duration-300`}
      >
        <path
          d="M2.16602 2.33334L9.83268 10L2.16602 17.6667"
          strokeWidth="3.83333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* button text */}
      {children}
    </button>
  );
};

export default Button;
