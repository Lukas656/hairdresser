import React from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "../../views/examples/Home.jsx";
import NotFound from "../../views/examples/NotFound.jsx";
const Content = props => (
    <main className="Content">
    
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </main>
  );
   
  export default Content;