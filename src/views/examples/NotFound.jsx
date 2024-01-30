import React from 'react'
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <aside className="not-found">
       <br/>
       <br/>
       <br/>
       <h1>Pagina não Encontrada...</h1>
       <br/>
        <Link to="/">Inicio</Link>
    </aside>
    );
}
export default NotFound;
