import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <>
  <aside>
    <nav>
      <ul>
        
        <Link to="/agendamento">Agendamento</Link>
        <a href="#tabela">Preços</a>
        <Link to="/sobre">Sobre</Link>
      </ul>
    </nav>
  </aside>
  <br />
  <hr />
 
  </>
);

export default Menu;
