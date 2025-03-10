import React from "react";
import bg_image from "/images/img_harjoitukset.jpg";
import Button from "../components/Button";

const Harjoitukset = () => {
  return (
    <div
      className={`relative flex items-center justify-cente overflow-clip  py-12 md:py-24 my-16 md:my-24`}
    >
      {/* bg image & dark overlay */}
      <img
        className="absolute w-full h-full lg:h-fit left-0  lg:-bottom-64 object-cover"
        src={bg_image}
        alt=""
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* text content */}
      <div className=" z-10 max-w-[1350px] mx-auto section-padding text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-2">
          Saat harjoitukset heti käyttöösi
        </h2>
        <p className="text-sm sm:text-base leading-6 sm:leading-8 font-light">
          Saat kurssimateriaalin käyttöösi nopeasti yhden napin painnaulksella
        </p>

        <Button
          link="https://dashboard-edai.netlify.app/"
          className="px-6 sm:px-10 py-2.5 mx-auto mt-5 sm:mt-7 md:mt-12"
          isBordered
        >
          Ota heti käyttöön
        </Button>
      </div>
    </div>
  );
};

export default Harjoitukset;
