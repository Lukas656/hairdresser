import React from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "../../views/examples/Home";
import Agendamento from "../../views/examples/Agendamento";
import Galeria from "../../views/examples/Galeria";
import NotFound from "../../views/examples/NotFound";
const Content = props => (
    <main className="Content">
    
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </main>
  );
   
  export default Content;