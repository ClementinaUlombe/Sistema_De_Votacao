import { useState } from 'react';
import './configInicial.css';
import logImage from '../assets/log.png';
import { useNavigate } from 'react-router-dom';

const VotacaoInicial = () => {
  const [ano, setAno] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [semestre, setSemestre] = useState('');
  const navigate = useNavigate();

  const handleAvancar = () => {
    console.log({ ano, curso, periodo, semestre });
    alert('Configuração salva com sucesso! Redirecionando para o menu principal...');
    navigate('/votacaos');
  };

  return (
    <div className="full-screen-container">
      {/* Imagem acima do formulário */}
      <img src={logImage} alt="Logo" className="logo-top" />

      {/* Formulário */}
      <div className="form-container">
        <h2 className="form-title">Configuração Inicial</h2>

        <div className="form-group">
          <label>Ano</label>
          <select
            value={semestre}
            onChange={(e) => setAno(e.target.value)}
          >
            <option value="" disabled>Seleção do Ano</option>
            <option value="1º Ano">1º Ano</option>
            <option value="2º Ano">2º Ano</option>
            <option value="3º Ano">2º Ano</option>
            <option value="4º Ano">2º Ano</option>
            <option value="5º Ano">2º Ano</option>

          </select>
        </div>

        <div className="form-group">
          <label>Curso</label>
          <select
            value={semestre}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="" disabled>Seleção do Curso</option>
            <option value="">Engenharia Infromática e Sistema de Informação</option>
            <option value="">Direito</option>
            <option value="">Hotelaria e Turismo</option>
            <option value="">Engenharia de Telecominicação</option>
            <option value="">Contabilidade</option>
            <option value="">Gestão de Recursos Humanos</option>
            <option value="">Ciências Criminais</option>
          </select>
        </div>

        <div className="form-group">
          <label>Período</label>
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          >
            <option value="" disabled>Seleção do Período</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>

        <div className="form-group">
          <label>Semestre</label>
          <select
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
          >
            <option value="" disabled>Seleção do Semestre</option>
            <option value="1º Semestre">1º Semestre</option>
            <option value="2º Semestre">2º Semestre</option>
          </select>
        </div>

        <button onClick={handleAvancar} className="submit-button">
          Avançar
        </button>
      </div>
    </div>
  );
};

export default VotacaoInicial;
