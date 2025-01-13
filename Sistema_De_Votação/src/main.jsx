import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import VotacaoInicial from './components/configInicial';
import MenuPrincipal from './components/MenuPrincipal';
import Votacao from './components/Votacao';
import Apuracao from './components/Apuracao';
import Cadastro from './components/Cadastro';
import Auditoria from './components/Auditoria';
import Dashboard from './components/Dashboard';

//import VotacaoPage from './pages/VotacaoPage.';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<Login />} />

        {/* Rota para a página de votação */}
        <Route path="/votacao" element={<VotacaoInicial />} />
        <Route path="/votacaos" element={<MenuPrincipal />} />
        <Route path="/votacaoss" element={<Votacao />} />
        <Route path="/apuracao" element={<Apuracao />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

