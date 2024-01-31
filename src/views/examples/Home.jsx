import React from "react";
import "./home.css";
import Footer from "./Footer"
import { Link } from "react-router-dom";
import Menu from '../../components/layout/Menu';
import Tabela from '../../components/Tabela';

function Home() {
  const logoImg = "https://i.ibb.co/XWVWGPw/download.png";

  return (
    <div className="home">
      <div className="logomarca">
        <img src={logoImg} alt="Logomarca" id="logo"/>
      </div>
      <Menu/>
      <section className="section1">
        <div className="texto">
          <h1>
            <strong>Cortes Estilo Afro</strong>
          </h1>
          <p>Bem vindo(a) a Apresentação do site.</p>
          <Link to="/galeria">Galeria de Fotos</Link>
        </div>
        <div className="imagens">
          <img
            src="https://i.ibb.co/SytyZnF/71d58ec04569e421faf87f32374e7567.jpg"
            alt="exemplo 1"
          />
          <img
            src="https://i.ibb.co/yyxKmnQ/trancas-masculinas-og.jpg"
            alt="exemplo 2"
          />
          <img
            src="https://i.ibb.co/j3xtWSn/cabelo-afro-masculino-dreads-curtos-topo-unsplash.jpg"
            alt="exemplo 3"
          />
          <img
            src="https://i.ibb.co/4F62vgw/5295f3f927c8c4882acef63497f695bf.webp"
            alt="exemplo 4"
          />
        </div>
      </section>
      <p>"Bem-vindo à "Estilo Afro Cortes", o destino definitivo para cortes de cabelo e barbearia especializada em realçar a beleza e autenticidade dos cabelos afro. Nossa equipe de profissionais talentosos e experientes está dedicada a proporcionar experiências de cuidado capilar únicas, focando em cortes precisos, estilos modernos e um ambiente acolhedor. Na "Estilo Afro Cortes", celebramos a diversidade e a individualidade, garantindo que cada cliente saia não apenas com um corte impecável, mas também com uma autoestima renovada. Descubra o poder da expressão pessoal conosco, onde a arte do cabelo encontra a excelência em cada detalhe."</p>
      <Tabela/>
      <Footer/>
    </div>
  );
}

export default Home;
