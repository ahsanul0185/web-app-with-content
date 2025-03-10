import React from "react";
import { motion } from "motion/react";

const BoxSuurin = ({ bg_img, children, idx }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y : 30 }}
    whileInView={{ opacity: 1, y : 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{duration : 0.8, ease : "easeOut", delay : 0.3 * idx}}
          style={{backgroundImage : `url(${bg_img})`}}
      className={`md:flex-1 max-w-[750px] relative bg-cover bg-center bg-no-repeat z-0 lg:aspect-[4/3] px-7 md:px-12 lg:px-7 py-10 rounded-lg`}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />
      {children}
    </motion.div>
  );
};

export default BoxSuurin;
