import React from "react";
import bg_image from "/images/img_valitse.jpg";
import { motion } from "motion/react";

const Valitse = () => {
  return (
    <div
      className={`relative flex items-center  overflow-hidden py-12 md:py-20 `}
    >
      {/* bg image & dark overlay */}
      <img
        className="absolute w-full h-full lg:h-fit left-0 lg:-bottom-24 object-cover"
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
        className="z-10 max-w-[1350px] mx-auto section-padding"
      >
        <h2 className="sm:text-xl md:text-2xl font-bold mb-3">
          Valitse rehellinen ja tulosta tekevä kurssijärjestäjä joka tukee
          unelmiasi.
        </h2>
        <p className="text-sm sm:text-base leading-5 sm:leading-8">
          Valmennuskurssit kilpailevat hinnalla ja sillä, kuka pääsee nopeammin
          taskuusi. Vaikka jokainen tarjoaa saman palvelun, he kilpailevat
          teidän unelmistanne. EDAI on täällä siksi, että haluamme tarjota
          teille jokaiselle mahdollisuuden saavuttaa unelmanne. Maailma
          tarvitsee fiksuja, osaavia ja ammattitaitoisia kauppatieteilijöitä,
          jotka mullistavat maailman. Siksi olemme täällä unelmienne puolesta.
          EDAI on markkinoiden edullisin ja tehokkain
          valmennuskurssijärjestelmä, joka tukee jokaisen oppimista.
        </p>
      </motion.div>
    </div>
  );
};

export default Valitse;
