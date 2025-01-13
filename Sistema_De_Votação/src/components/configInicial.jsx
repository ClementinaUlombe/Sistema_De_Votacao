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
          <input
            type="text"
            placeholder="5º Ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            placeholder="Engenharia Informática e Sistema de Informação"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />
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
