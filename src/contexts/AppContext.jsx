import { createContext, useContext, useEffect, useState } from "react";
import { dataContent } from "../dataContent";


const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [subjectList, setSubjectList] = useState();

  useEffect(() => {
    if (location.pathname.startsWith("/taloustieto")) {
      setSubjectList(dataContent[1]); // Set data for `/taloustieto/*`
    } else {
      setSubjectList(dataContent[0]); // Default data
    }
  }, [location.pathname]); // Runs when the path changes


  const [chatHistory, setChatHistory] = useState([
    {
      role: "developer",
      content: "You are a helpful assistant, you will answer shortly.",
    },
    { role: "assistant", content: "Hello, How can I assist you today?" },
  ]);

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTabletSidebar, setShowTabletSidebar] = useState(false);



  const values = {
    isChatBoxOpen,
    setIsChatBoxOpen,
    subjectList,
    setSubjectList,
    showSidebar,
    setShowSidebar,
    showTabletSidebar,
    setShowTabletSidebar,
    chatHistory,
    setChatHistory,
    dataContent
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
