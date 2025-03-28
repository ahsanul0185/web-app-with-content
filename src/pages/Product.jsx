import React from "react";
import { useAppContext } from "../contexts/AppContext";
import SidebarContent from "../components/SidebarContent";
import MiddleSection from "../components/MiddleSection";
import RightSide from "../components/RightSide";
import AiChatBox from "../components/AiChatBox";
import ToggleButton from "../utils/ToggleButton";
import icon_sidebar from "../assets/sidebar.svg";
import icon_menu from "../assets/icon-menu.svg";
import icon_logout from "../assets/icon-logout-white.svg";
import SettingsIcon from "../utils/SettingsIcon";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Product = () => {
  
  const {
    isChatBoxOpen,
    setIsChatBoxOpen,
    setShowSidebar,
    showTabletSidebar,
    setShowTabletSidebar,
    contentData
  } = useAppContext();

  

  return (
    <div className={`relative flex flex-col sm:flex-row  text-white overflow-clip z-0 h-[100dvh]`}>
      {/* Header */}
      <div className="hidden sm:flex lg:hidden absolute left-0 top-0 px-6 py-6 h-sm:py-3.5 items-center justify-between gap-6 w-full bg-black">
        <button onClick={() => setShowTabletSidebar((prev) => !prev)}>
          <img  draggable={false} src={icon_sidebar} alt="" />
        </button>

        <SettingsIcon />
        <button onClick={() => window.location.href = "https://dashboard-edai.netlify.app/"} className="hidden h-sm:flex items-center text-sm gap-3 duration-200 hover:bg-light/10">
                <img draggable={false} src={icon_logout} alt="" className="size-3.5" />
                Kojelauta
              </button>
      </div>
      <Header />

      {/* Left Sidebar */}
      <div
        className={`absolute md:relative h-full z-20 duration-300  ${
          isChatBoxOpen ? "w-full xs:w-[370px] xl:w-[470px]" : "w-[300px] 2xl:w-[350px]"
        }  ${
          showTabletSidebar
            ? "-translate-x-0"
            : "-translate-x-full md:-translate-x-0"
        }`}
      >
        <AiChatBox />
        <SidebarContent />
      </div>
      {/* overlay */}
      <div onClick={() => { setShowTabletSidebar(false); setShowSidebar(false) }} className={`absolute inset-0 bg-black/50 z-10 duration-200 ${showTabletSidebar ? "opacity-100 visible md:opacity-0 md:invisible" : "opacity-0 invisible"}`} />

      {/* Center Contents */}
      <Outlet />

      {/* Right Side */}
      <RightSide currentContentData={contentData} />

      {/* Toggle button */}
      <ToggleButton
        isChecked={isChatBoxOpen}
        setIsChecked={setIsChatBoxOpen}
        setShowTabletSidebar={setShowTabletSidebar}
        setShowSidebar={setShowSidebar}
        className="hidden sm:flex absolute bottom-0 left-1/2 md:left-[55%] -translate-x-1/2  flex-col items-center justify-center  w-full h-[90px] h-sm:h-[55px]"
      />
    </div>
  );
};

export default Product;
