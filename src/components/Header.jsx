import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import logo from "../assets/logo.svg";
import arrow_left from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    current > 10 ? setIsScrolled(true) : setIsScrolled(false);
  });

  return (
    <div
      className={`fixed w-full top-0 left-0 z-[999] flex justify-between items-center duration-300 section-padding md:py-6 ${
        isScrolled
          ? "from-[#D9D9D966 ] to-[#7373731A] bg-white/15 backdrop-blur translate-y-0"
          : "from-[#606060 ] to-[#1a1a1a] backdrop-blur-0"
      }`}
    >
      {/* logo */}
      <Link to="/">
        <img className="size-14 sm:size-16 md:size-fit" src={logo} alt="edai" />
      </Link>

      {/* right buttons */}
      <div
        className="flex items-center gap-5"
      >
          <button onClick={() => window.location.href = "https://dashboard-edai.netlify.app/"} className="text-white text-sm duration-200 hover:text-[#e9e9e9] group flex gap-2">
            <span>Aloita Opiskelu</span>{" "}
            <img
              src={arrow_left}
              className="w-5 group-hover:opacity-85 group-hover:translate-x-1 duration-200 "
              alt="logout icon"
            />
          </button>
      </div>
    </div>
  );
};

export default Header;
