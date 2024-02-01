import React from "react";
import { Link } from "react-router-dom";
import "./agenda.css";
import Footer from "./Footer";

const logoImg = "https://i.ibb.co/XWVWGPw/download.png";

const Sobre = (props) => {
  return (
    <div className="sobre">
      <img src={logoImg} alt="Logomarca" id="logo" width={"150px"} />
      <nav>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/Agendamento">Agendamento</Link>
          <Link to="/sobre">Sobre</Link>
        </ul>
      </nav>

      {/* Seção de Apresentação do Salão */}
      <section className="apresentacao-salao">
         <div className="descricao-salao">
          <h2>Salão "Estilo de Preto"</h2>
          <h3>
          "Bem-vindo à "Estilo de Preto", o destino definitivo para cortes de cabelo e barbearia especializada em realçar a beleza e autenticidade dos cabelos afro. Nossa equipe de profissionais talentosos e experientes está dedicada a proporcionar experiências de cuidado capilar únicas, focando em cortes precisos, estilos modernos e um ambiente acolhedor. Na "Estilo Afro Cortes", celebramos a diversidade e a individualidade, garantindo que cada cliente saia não apenas com um corte impecável, mas também com uma autoestima renovada. Descubra o poder da expressão pessoal conosco, onde a arte do cabelo encontra a excelência em cada detalhe." Oferecemos serviços de alta qualidade
            para cuidar do seu cabelo e realçar a sua beleza única.
          </h3>
          <p>Proprietário: Lucas Santos</p>
          {/* Adicione mais informações conforme necessário */}
        </div>
        <img
          src="https://i.ibb.co/wwvDN24/c42880debe019078e1232f3913e2cff4.jpg" 
          alt="Salão de Beleza"
          className="imagem-salao"
        />
      </section>

      {/* Seção de Informações sobre Ferramentas */}
      <section className="informacoes-ferramentas">
        <h2>Ferramentas Utilizadas</h2>
        <ul>
          <li>React</li>
          {/* Adicione mais ferramentas conforme necessário */}
        </ul>
      </section>

      {/* Créditos */}
      <div className="creditos">
        <p>Desenvolvido por: Lucas SN <br/>Textos feitos por: ChatGPT</p>
      </div>

      <Footer />
    </div>
  );
};

export default Sobre;
