import { Link } from "react-router-dom";
import './MenuPrincipal.css';
import logImage from '../assets/log.png';

const MenuPrincipal = () => {
  return (
    <div className="menu-principal">
      <img src={logImage} alt="Logo" className="logo-top-left" />
      <h1>Sistema de Votação Universitária</h1>
      <nav>
        <ul>
        <li className="menu-item"><Link to="/cadastro">Controle de Cadastro</Link></li>
          <li className="menu-item"><Link to="/votacaoss">Votação</Link></li>
          <li className="menu-item"><Link to="/apuracao">Apuração</Link></li>
          <li className="menu-item"><Link to="/auditoria">Auditoria</Link></li>
          <li className="menu-item"><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPrincipal;
