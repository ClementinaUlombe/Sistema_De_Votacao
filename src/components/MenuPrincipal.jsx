import { Link } from "react-router-dom";
import './MenuPrincipal.css';
import logImage from '../assets/log.png';
import imagem1 from '../assets/imageminsutec.png';
import imagem2 from '../assets/segundainsute.jpg';
import imagem3 from '../assets/terceirainsutec.jpg';
import { useState, useEffect } from "react";

const MenuPrincipal = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [imagem1, imagem2, imagem3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Alterna entre as imagens
    }, 5000); // 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  return (
    <div className="menu-principal">
      <img src={logImage} alt="Logo" className="logo-top-left" />
      <div className="news-ticker">
  <p>Sistema de Votação Universitária</p>
    </div>
      <div className="container">
        {/* Lado Esquerdo: Cards */}
        <div className="left-section">
          <nav>
            <ul>
              <li className="menu-item">
                <Link to="/cadastro">Controle de Cadastro</Link>
              </li>
              <li className="menu-item">
                <Link to="/votacaoss">Votação</Link>
              </li>
              <li className="menu-item">
                <Link to="/apuracao">Apuração</Link>
              </li>
              <li className="menu-item">
                <Link to="/auditoria">Auditoria</Link>
              </li>
              <li className="menu-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Lado Direito: Imagens */}
        <div className="right-section">
          <img
            src={images[currentImage]}
            alt="Slide"
            className="slideshow-image"
          />
        </div>
      </div>

      {/* Retângulo Azul na Lateral Esquerda */}
      <div className="laterais-azuis"></div>

      {/* Retângulo Azul na Lateral Direita */}
      <div className="laterais-azuis direita"></div>
    </div>
  );
};

export default MenuPrincipal;
