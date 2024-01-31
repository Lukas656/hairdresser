import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./agenda.css";
import Tabela from "../../components/Tabela";
import Footer from "./Footer";

const logoImg = "https://i.ibb.co/XWVWGPw/download.png";

const Agendamento = (props) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    horario: "",
    servico: "",
    // Adicione outros campos conforme necessário
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados do formulário (por exemplo, para um servidor)
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className="agendamento">
      <img src={logoImg} alt="Logomarca" id="logo" width={"150px"} />
      <nav>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </ul>
      </nav>
      <section className="section-agenda">
      <form onSubmit={handleSubmit}>
        
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            />
        </label>
        <label>
          Data:
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
            />
        </label>
        <label>
          Horário:
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
            />
        </label>
        <label>
          Serviço:
          <input
            type="text"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
            />
        </label>
        {/* Adicione outros campos conforme necessário */}
        
        <button type="submit">Agendar</button>
      </form>
      <Tabela/>
    </section>

<Footer/>
    </div>
  );
};

export default Agendamento;
