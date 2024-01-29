// Em Home.jsx
import React, { useRef } from 'react';
import './home.css';

function Home() {
  const logoImg = "https://i.ibb.co/XWVWGPw/download.png";
  const fotosSectionRef = useRef(null);

  const scrollToFotos = () => {
    if (fotosSectionRef.current) {
      fotosSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="logomarca">
        <img src={logoImg} alt="Logomarca" />
      </div>

      <div id='fotos' ref={fotosSectionRef}>
        <h1>Fotos</h1>
      </div>

      <button onClick={scrollToFotos}>Ir para Fotos</button>
    </div>
  );
}

export default Home;
