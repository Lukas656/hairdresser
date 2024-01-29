import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <button>
          <Link to="/">Preços</Link>
        </button>
        <button>
          <Link to="/#fotos">Fotos</Link>
        </button>
        <button>
          <Link to="/">Sobre</Link>
        </button>
      </ul>
    </nav>
  </aside>
);

export default Menu;
