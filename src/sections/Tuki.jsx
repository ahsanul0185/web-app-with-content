import React from 'react'
import bg_image from "/images/img_tuki.jpg";
import { motion } from 'motion/react';

const Tuki = () => {
  return (
        <div className={`relative md:h-[60vh] flex items-end overflow-hidden mb-12 md:mb-20`}>
          {/* bg image & dark overlay */}
          <img
            className="absolute  w-full h-full lg:h-fit left-0 lg:-top-16 xl:-top-24 object-cover"
            src={bg_image}
            alt=""
          />
          <div className="absolute inset-0 bg-black/60" />
    
          {/* text content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        viewport={{once : true, amount : 0.3}}
        className="mt-52 md:mt-0 z-10 max-w-[1350px] mx-auto py-10 section-padding">
            <h2 className="md:text-2xl font-bold mb-3 sm:mb-5">
            EDAI- Tuki unelmille ja tulevaisuudelle
            </h2>
            <p className="text-sm sm:text-base leading-6 md:leading-8">
            Edai on suomalainen yritys, joka on omistautunut opiskelijoiden menestyksen ja tavoitteiden saavuttamisen tukemiseen. Uskomme vahvasti, että jokainen opiskelija on tulevaisuutemme perusta – heidän innovaatioidensa ja lahjakkuutensa varaan rakentuu parempi maailma.
            Tavoitteenamme on tarjota työkaluja ja resursseja, joiden avulla opiskelijat voivat saavuttaa unelmansa ja menestyä opinnoissaan. Olemme täällä, jotta jokainen askel kohti päämäärää tuntuisi mahdolliselta. Me Edai:lla tuemme sinua matkallasi kohti parempaa tulevaisuutta.
            </p>
          </motion.div>
        </div>
  )
}

export default Tuki