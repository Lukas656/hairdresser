// Em Home.jsx
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const logoImg = "https://i.ibb.co/XWVWGPw/download.png";

  return (
    <div className="home">
      <div className="logomarca">
        <img src={logoImg} alt="Logomarca" id="logo"/>
      </div>

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
            src="https://i.ibb.co/j3xtWSn/cabelo-afro-masculino-dreads-curtos-topo-unsplash.jpg"
            alt="exemplo 1"
          />
          <img
            src="https://i.ibb.co/j3xtWSn/cabelo-afro-masculino-dreads-curtos-topo-unsplash.jpg"
            alt="exemplo 2"
          />
          <img
            src="https://i.ibb.co/j3xtWSn/cabelo-afro-masculino-dreads-curtos-topo-unsplash.jpg"
            alt="exemplo 3"
          />
          <img
            src="https://i.ibb.co/j3xtWSn/cabelo-afro-masculino-dreads-curtos-topo-unsplash.jpg"
            alt="exemplo 4"
          />
        </div>
      </section>
      <p>"Bem-vindo à "Estilo Afro Cortes", o destino definitivo para cortes de cabelo e barbearia especializada em realçar a beleza e autenticidade dos cabelos afro. Nossa equipe de profissionais talentosos e experientes está dedicada a proporcionar experiências de cuidado capilar únicas, focando em cortes precisos, estilos modernos e um ambiente acolhedor. Na "Estilo Afro Cortes", celebramos a diversidade e a individualidade, garantindo que cada cliente saia não apenas com um corte impecável, mas também com uma autoestima renovada. Descubra o poder da expressão pessoal conosco, onde a arte do cabelo encontra a excelência em cada detalhe."</p>
      <section className="section2">
        <img
          id="tabela"
          src="https://i.ibb.co/1dFMFgF/Tabela-de-Pre-os.png"
          alt="exemplo 5"
        /><br/>
        <a
          href="https://i.ibb.co/1dFMFgF/Tabela-de-Pre-os.png"
          download="https://i.ibb.co/1dFMFgF/Tabela-de-Pre-os.png"
        >
          Baixar Tabela de Preços
        </a>
      </section>
      <br/>
      <br/>
      <br/>
      <hr />
      <footer>
    <div class="footer">
      <div class="footer-content">
        <div class="social-links">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#logo">Inicio</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/Lukas656/hairdresser" target="_blank" rel="noopener noreferrer">Código do Projeto</a></li>

          </ul>
        </div>
        <div class="contact-info">
          <h3>Contato</h3>
          <p>Email: lucassantosnasc.21.@gmail.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Estado: São Paulo</p>
        </div>
      </div>

      <div class="copyright">
        <span>&copy;2023 Feito por: Lucas Santos Nascimento.</span>
      </div>
    </div>

  </footer>
    </div>
  );
}

export default Home;
