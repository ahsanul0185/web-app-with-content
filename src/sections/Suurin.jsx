import React from "react";
import logo_model from "../assets/model-logo.svg";
import logo_kauppatieteellinen from "../assets/logo-kauppatieteellinen.png";
import BoxSuurin from "../components/BoxSuurin";
import { motion } from "motion/react";

const Suurin = () => {
  return (
    <div className="bg-dark pt-14 md:pt-20">
      {/* contents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1350px] mx-auto section-padding"
      >
        <h2 className="sm:text-xl md:text-2xl font-bold mb-2">
          Suurin osa hakijoista osallistuu edelleen valintakokeeseen
        </h2>
        <p className="leading-6 sm:leading-9 text-sm sm:text-base md:text-lg font-light">
          Viime vuosina kauppatieteellisen alan yhteisvalinnassa on ollut noin 1
          500 aloituspaikkaa ja hakijoita on ollut noin 12 000 - 13 000, joista
          ensisijaisia hakijoita on ollut noin 8000. Aloituspaikoista 60 %
          täytetään todistuksella ja 40 % valintakokeella. Keskimäärin alle 12 %
          hakijoista sai opiskelupaikan todistuksella. Aalto-yliopiston
          kauppakorkeakoulun ensisijaisista hakijoista vain noin 5 % saa
          opiskelupaikan todistuksen perusteella. Uusi valintamenettely suosii
          sellaisia hakijoita, joilla on erinomainen todistus. Todistusvalinnan
          jälkeen jäljelle jää vain noin 700 opiskelupaikkaa, joista kilpailee
          todella suuri määrä opiskelijoita. Esimerkiksi keväällä 2021
          valintakokeeseen osallistuneista vain noin 4 % sai opiskelupaikan
          valintakoekiintiössä. <br /> Hakukohteesta riippuen noin 90 %
          hakijoista osallistuu edelleen valintakokeeseen. Kilpailu
          opiskelupaikoista valintakoekiintiössä on kovempaa kuin aikaisemmin.
          Hakijan on menestyttävä valintakokeessa erittäin hyvin. Aikaisempien
          vuosien tulosten perusteella <span className="font-bold">EDAI</span>{" "}
          valmennuksen valmennuskurssille osallistuminen parantaa merkittävästi
          mahdollisuuksiasi saada unelmien opiskelupaikka kauppakorkeakoulusta.
        </p>
      </motion.div>

      {/* boxes */}
      <div className="mx-auto mt-16 md:mt-28 section-padding flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-center gap-12">
        <BoxSuurin bg_img="/images/box_1.jpg" idx={0}>
          <div>
            <img
              className="block w-12 sm:w-16 mb-7 sm:mb-10 mt-2"
              src={logo_model}
              alt=""
            />

            <h2 className="lg:text-xl xl:text-2xl font-semibold mb-4 tracking-wide">
              Valmistaudu kauppakorkeakoulun pääsykokeisiin räätälöityä tuen
              avulla tehokkaammin!
            </h2>

            <p className="text-sm sm:text-base  font-light leading-6 sm:leading-8">
              Tarjoamme ainutlaatuisen oppimisalustan, jossa tekoäly vastaa
              kysymyksiisi reaaliajassa ja auttaa sinua ymmärtämään haastavatkin
              aiheet. Saat juuri sinulle räätälöityä tukea pääsykokeisiin – opi
              nopeammin ja menesty paremmin!
            </p>
          </div>
        </BoxSuurin>

        <BoxSuurin bg_img="/images/box_2.jpg" idx={1}>
          <div>
            <img
              className="block w-28 sm:w-32 mb-7 sm:mb-10"
              src={logo_kauppatieteellinen}
              alt=""
            />

            <h2 className="lg:text-xl xl:text-2xl font-semibold mb-4 tracking-wide -mt-3">
              Ainoa standardien mukainen valinta kauppakorkeakoulun
              pääsykokeisiin!
            </h2>

            <p className="text-sm sm:text-base font-light leading-6 sm:leading-8">
              Palvelumme tarjoaa ajantasaiset ja tarkasti Kauppatieteellisen
              alan yhteisvalinnan (kauppatieteet.fi) standardien mukaiset
              oppimateriaalit. Vain meidän opiskelijoillamme on käytössään
              materiaali, joka takaa oikeat valmiudet menestyä pääsykokeissa.
              Älä tuhlaa aikaasi epäluotettaviin lähteisiin – valitse varma tie
              kohti unelmiesi opiskelupaikkaa!
            </p>
          </div>
        </BoxSuurin>
      </div>
    </div>
  );
};

export default Suurin;
