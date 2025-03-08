// import React, { useEffect, useRef, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import rehypeRaw from "rehype-raw";
// import "katex/dist/katex.min.css";
// import { useLocation, useParams } from "react-router-dom";

// const MiddleSection = ({folder}) => {

//   const [markdown, setMarkdown] = useState("");
//   const topRef = useRef();
//   const pathname = useLocation().pathname;
//   const { page = pathname === '/' ? "tilasto-ja-todennakoisyys" : "taloustieto" } = useParams();

//   useEffect(() => {
//     fetch(`/contents/${folder}/${page}.md`)
//             .then(res => {
//                 if (!res.ok) throw new Error("File not found")
//                 return res.text()
//             })
//             .then(text => setMarkdown(text))
//             .catch(() => setMarkdown("Page not found"))
//   }, [page])
  

//   return (
//     <div className="flex-1 ">

//       <div className="px-6 sm:px-20 md:px-12 h-[600px] sm:h-full w-full overflow-y-scroll overflow-x-hidden custom-scrollbar lg:mt-10  lg:mb-[6rem]">
//       <div ref={topRef} />
//         <div className="custom-markdown text-sm sm:text-base leading-[25px] sm:leading-loose sm:pt-16 lg:pt-0 sm:pb-[120px] lg:pb-[150px]">
//           <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]}
  
//           >
//             { markdown }
//           </ReactMarkdown>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiddleSection;


import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { useLocation, useParams } from "react-router-dom";

const MiddleSection = ({ folder }) => {
  const [markdown, setMarkdown] = useState("");
  const pathname = useLocation().pathname;
  const { page = pathname === '/' ? "tilasto-ja-todennakoisyys" : "taloustieto" } = useParams();

  useEffect(() => {
    fetch(`/contents/${folder}/${page}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch(() => setMarkdown("Page not found"));
  }, [page]);

  return (
    <div className="flex-1">
      <div className="px-6 sm:px-20 md:px-12 h-[600px] sm:h-full w-full overflow-y-scroll overflow-x-hidden custom-scrollbar lg:mt-10 lg:mb-[6rem]">
        <div className="custom-markdown text-sm sm:text-base leading-[25px] sm:leading-loose sm:pt-16 lg:pt-0 sm:pb-[120px] lg:pb-[150px]">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
