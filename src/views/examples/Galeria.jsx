import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./agenda.css";
import Footer from "./Footer";
import fotos from '../../data/fotos';

const logoImg = "https://i.ibb.co/XWVWGPw/download.png";

const Galeria = (props) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  function getFotos() {
    return fotos.map((foto, i) => (
      <img
        key={i}
        src={foto.url}
        alt={foto.alt}
        className="grid-item"
        onClick={() => setFullscreenImage(foto.url)}
      />
    ));
  }

  return (
    <div className="galeria">
      <img src={logoImg} alt="Logomarca" id="logo" width={"150px"} />
      <nav>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/Agendamento">Agendamento</Link>
          <Link to="/sobre">Sobre</Link>
        </ul>
      </nav>

      <div className="grid-container">
        {getFotos()}
      </div>

      {/* Renderiza a imagem em tela cheia se o estado for verdadeiro */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Imagem em Tela Cheia" className="fullscreen-image" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeria;
