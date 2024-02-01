import React from "react";
import "./home.css";


const Footer = props => (
    <>
        <div class="footer">
    <hr />
      <div class="footer-content">
        <div class="social-links">
          <h2>Redes Sociais</h2>
          <ul>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/Lukas656/hairdresser" target="_blank" rel="noopener noreferrer">Código do Projeto</a></li>
            <li>  <a href="#logo">Topo</a></li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>Contato</h2>
          <p>Email: lucassantosnasc.21.@gmail.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Estado: São Paulo</p>
        </div>
      </div>

      <div class="copyright">
        <span>&copy;2023 Feito por: Lucas Santos Nascimento.</span>
      </div>
    </div>
    </>
)

export default Footer