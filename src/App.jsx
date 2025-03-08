import React from "react";
import { useAppContext } from "./contexts/AppContext";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import MiddleSection from "./components/MiddleSection";
import "katex/dist/katex.min.css";

const App = () => {
  const {
   contentData
  } = useAppContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} >
          <Route index element={ <MiddleSection folder="tilasto" />} />
        <Route path="/:page" element={<MiddleSection folder="tilasto" />} />
        </Route>
        
        <Route path="/taloustieto" element={<Product />} >
          <Route index element={ <MiddleSection folder="taloustieto" />} />
          <Route path="/taloustieto/:page" element={ <MiddleSection folder="taloustieto" />} />
        </Route>
     </Routes>
    </div>
  );
};

export default App;
