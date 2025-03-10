import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import Taloustieto from "../sections/Taloustieto";
import Valitse from "../sections/Valitse";
import Suurin from "../sections/Suurin";
import Harjoitukset from "../sections/Harjoitukset";
import Tuki from "../sections/Tuki";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import { motion } from "motion/react";

const Home = () => {
  const date = "2025-06-04T09:00:00Z"; // set UTC time here

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-0 text-white font-poppins bg-[#101010]"
    >
      <Header />
      <Timer
        date={date}
        className="fixed z-50 scale-75 sm:scale-100 py-3 px-2 md:px-3 top-[20%] lg:top-[30%] -right-7 sm:right-0 bg-gradient-to-r from-[#FFFFFF66] to-[#9999991A] backdrop-blur-md rounded-md"
      />
      <Hero />
      <Taloustieto />
      <Valitse />
      <Suurin />
      <Harjoitukset />
      <Tuki />
      <Footer />
    </motion.div>
  );
};

export default Home;
