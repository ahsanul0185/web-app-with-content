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
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Typewriter = ({ text, delay, infinite, endIndicator }) => {

  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    setDisplayedText([]); // Reset when new text arrives
    text.split(" ").forEach((char, i) => {
      setTimeout(() => {
        setDisplayedText((prev) => [...prev, char]);
      }, i * 50); // Typing speed (adjust as needed)
    });
  }, [text]);


  return   <div className="typing-container">
      <div>
      {displayedText.map((char, i) => (
          <span key={i} className="fade-in-char" style={{ animationDelay: `${i * 0.001}ms` }}>
            {char + " "}
          </span>
        ))}
      </div>
    </div>;
};

export default Typewriter;
