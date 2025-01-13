import './Apuracao.css'; // Arquivo para estilização customizada
import logImage from '../assets/log.png'; // Importando a imagem
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Apuracao = () => {
  const [resultados, setResultados] = useState([]);
  const [totalVotos, setTotalVotos] = useState(0);
  const [dataApuracao, setDataApuracao] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de dados de votação
    const dadosSimulados = [
      { id: 1, nome: 'Candidato A', votos: 150, percentual: 45 },
      { id: 2, nome: 'Candidato B', votos: 100, percentual: 30 },
      { id: 3, nome: 'Candidato C', votos: 85, percentual: 25 }
    ];

    setResultados(dadosSimulados);
    setTotalVotos(dadosSimulados.reduce((acc, curr) => acc + curr.votos, 0));
    setDataApuracao(new Date().toLocaleDateString());
  }, []);

  const gerarRelatorio = () => {
    // Lógica para gerar relatório detalhado
    console.log("Gerando relatório...");
    // Aqui você pode adicionar a lógica para exportar ou imprimir
  };

  return (
    <div className="apuracao-container">
     <img src={logImage} alt="Logo" className="logo-top-left" />
      <h2>Apuração dos Votos</h2>
      <div className="info-apuracao">
        <p>Data da Apuração: {dataApuracao}</p>
        <p>Total de Votos: {totalVotos}</p>
      </div>

      <div className="resultados-container">
        {resultados.map((candidato) => (
          <div key={candidato.id} className="resultado-item">
            <h3>{candidato.nome}</h3>
            <div className="barra-progresso">
              <div 
                className="progresso" 
                style={{ width: `${candidato.percentual}%` }}
              ></div>
            </div>
            <div className="dados-votos">
              <span>Votos: {candidato.votos}</span>
              <span>Percentual: {candidato.percentual}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="acoes-apuracao">
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
        <button onClick={() => navigate('/dashboard')}>Ver Dashboard</button>
      </div>
    </div>
  );
};

export default Apuracao;