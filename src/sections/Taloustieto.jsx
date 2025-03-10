import React from "react";
import { motion } from "motion/react";

const Taloustieto = () => {
  return (
    <div className="bg-dark py-12 md:py-24 section-padding">
      <p className="text-center font-bold sm:text-xl md:text-2xl">
        KAUPPATIETEEN ALAN VALINTAKOE UUDISTUU
      </p>

      <motion.div
        initial={{ opacity: 0, y : 30 }}
        whileInView={{ opacity: 1, y : 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{duration : 0.8, ease : "easeOut"}}
        className="container max-w-5xl mx-auto mt-8 sm:mt-5 bg-white text-black px-8 sm:px-16 md:px-24 rounded-md flex flex-col md:flex-row md:items-center md:gap-12"
      >
        <span className="block mx-auto md:mx-0 text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none select-none">
          F
        </span>
        <div className="pb-8 sm:py-10">
          <h2 className="text-sm md:text-xl lg:text-2xl">Taloustieto (YH2)</h2>
          <h2 className="text-sm md:text-xl lg:text-2xl sm:mt-2">
            Talousmatematiikka (MAA8 tai MAB5)
          </h2>

          <h3 className="text-sm lg:text-base font-bold mt-1 sm:mt-2">
            Valintakoetta F käyttävät Koulutusalat
          </h3>
          <ul className="text-xs md:text-sm lg:text-base font-bold list-disc list-inside mt-2 sm:mt-3 lg:leading-8">
            <li>Kauppatieteet</li>
            <li>Taloustieteet</li>
            <li>Talousjärjestelmätiede</li>
            <li>ympäristö- ja elintarviketalous</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Taloustieto;
