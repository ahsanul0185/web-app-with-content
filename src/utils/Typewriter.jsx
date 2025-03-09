// import { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";

// const Typewriter = ({ text, delay, infinite, endIndicator }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     let timeout;

//     if (currentIndex < text?.length) {
//       timeout = setTimeout(() => {
//         setCurrentText((prevText) => prevText + text[currentIndex]);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       }, delay);
//     } else if (infinite) {
//       // After typing is finished, reset to start typing again (if infinite is true)
//       setCurrentIndex(0);
//       setCurrentText("");
//     }

//     // Scroll to endIndicator after the text has finished rendering

//     endIndicator.current.scrollIntoView({ behavior: "smooth" });

//     return () => clearTimeout(timeout);
//   }, [currentIndex, delay, infinite, text, endIndicator]);

//   return <ReactMarkdown>{currentText}</ReactMarkdown>;
// };

// export default Typewriter;


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, delay, infinite, endIndicator }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay); // Adjust delay for typing speed
    } else if (infinite) {
      // Loop back after finishing typing (if infinite is true)
      setCurrentIndex(0);
      setCurrentText("");
    }

    // Scroll to endIndicator after the text has finished rendering
    if (endIndicator?.current) {
      endIndicator.current.scrollIntoView({ behavior: "smooth" });
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, endIndicator]);

  // Split the text into words and apply fade-in animation to each word
  const renderedText = currentText.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.001, // Slight delay between words for the fade-in effect
        duration: 0.5, // Duration of fade-in effect per word
      }}
    >
      {word + " "}
    </motion.span>
  ));

  return <div>{renderedText}</div>;
};

export default Typewriter;

