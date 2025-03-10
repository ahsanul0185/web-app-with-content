import React, { useEffect, useState } from "react";
import angleLeft from "../assets/angle-left.svg";
import icon_sidebar from "../assets/sidebar.svg";
import { useAppContext } from "../contexts/AppContext";
import ToggleButton from "../utils/ToggleButton";
import NavigateSubjectButton from "../utils/NavigateSubjectButton";
import { Link } from "react-router-dom";

const SidebarContent = () => {
  const {
    isChatBoxOpen,
    setSelectedContent,
    setShowTabletSidebar,
    showSidebar,
    setShowSidebar,
    setIsChatBoxOpen,
    subjectList,
    dataContent,
    setSubjectList,
  } = useAppContext();

  return (
    <div
      className={`absolute  w-[300px] 2xl:w-[350px] h-full h-sm:h-[100dvh] h-sm:overflow-y-auto z-10 duration-300 ${
        isChatBoxOpen && showSidebar
          ? "translate-x-0 bg-black"
          : !isChatBoxOpen
          ? "-translate-x-0 bg-[#0b0b0b]"
          : isChatBoxOpen
          ? "-translate-x-full bg-[#0b0b0b]"
          : "bg-[#0b0b0b]"
      } `}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-6">
          {!showSidebar && !isChatBoxOpen ? (
            <button
              className="block md:hidden size-3.5"
              onClick={() => setShowTabletSidebar(false)}
            >
              <img
                draggable={false}
                src={angleLeft}
                onClick={() => setShowTabletSidebar(false)}
                alt=""
              />
            </button>
          ) : !isChatBoxOpen ? (
            <button className="block md:hidden size-3.5">
              <img draggable={false} src={angleLeft} alt="" />
            </button>
          ) : (
            ""
          )}
          {
            <button
              className={`${showSidebar ? "visible" : "invisible"} ${
                isChatBoxOpen ? "visible" : "invisible"
              }`}
              onClick={() => showSidebar && setShowSidebar(false)}
            >
              <img draggable={false} src={icon_sidebar} alt="" />
            </button>
          }
        </div>

        <ToggleButton
          isChecked={isChatBoxOpen}
          setIsChecked={setIsChatBoxOpen}
          setShowTabletSidebar={setShowTabletSidebar}
          setShowSidebar={setShowSidebar}
          className="flex sm:hidden absolute top-3 left-1/2 -translate-x-1/2 scale-75"
          text="Aktivoi tekoäly"
        />
      </div>

      {/* Contents */}
      <div className="p-3 mt-16 ">
        <h2
          onClick={() => {
            setSelectedContent(contentData[0].details);
            setShowTabletSidebar(false);
            setIsChatBoxOpen(false);
          }}
          className="sm:text-lg font-semibold block mb-5 px-3 cursor-pointer"
        >
          <Link
            to={dataContent.indexOf(subjectList) === 0 ? "/" : "/taloustieto"}
          >
            {subjectList && subjectList[0].title}
          </Link>
        </h2>

        <ul className="text-sm sm:text-base flex flex-col justify-start text-[#bfbfbf]">
          {subjectList?.map(
            (item, idx) =>
              idx > 0 && (
                <li
                  key={idx}
                  onClick={() => {
                    setShowTabletSidebar(false);
                    setIsChatBoxOpen(false);
                  }}
                >
                  <Link
                    to={item.slug}
                    className="cursor-pointer duration-200 hover:bg-light/20 pl-3 pr-2 py-2 rounded-lg block"
                  >
                    {item.title}
                  </Link>
                </li>
              )
          )}
        </ul>

        <NavigateSubjectButton className="static w-fit mx-auto mt-[25%] lg:hidden" />
      </div>
    </div>
  );
};

export default SidebarContent;
