import logImage from '../assets/log.png'; // Importando a imagem
import { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [estatisticas, setEstatisticas] = useState({
    totalVotantes: 0,
    participacao: 0,
    votosPorHora: [],
    distribuicaoVotos: []
  });

  useEffect(() => {
    // Simulação de dados para o dashboard
    const dadosSimulados = {
      totalVotantes: 335,
      participacao: 78.5,
      votosPorHora: [
        { hora: '08:00', quantidade: 45 },
        { hora: '09:00', quantidade: 62 },
        { hora: '10:00', quantidade: 78 }
      ],
      distribuicaoVotos: [
        { candidato: 'Candidato A', votos: 150, percentual: 45 },
        { candidato: 'Candidato B', votos: 100, percentual: 30 },
        { candidato: 'Candidato C', votos: 85, percentual: 25 }
      ]
    };
    setEstatisticas(dadosSimulados);
  }, []);

  return (
    <div className="dashboard-container">
    <img src={logImage} alt="Logo" className="logo-top-left" />
      <h2>Dashboard de Votação</h2>

      <div className="cards-container">
        <div className="card">
          <h3>Total de Votantes</h3>
          <p className="numero-destaque">{estatisticas.totalVotantes}</p>
        </div>

        <div className="card">
          <h3>Taxa de Participação</h3>
          <p className="numero-destaque">{estatisticas.participacao}%</p>
        </div>
      </div>

      <div className="graficos-container">
        <div className="grafico">
          <h3>Votos por Hora</h3>
          <div className="grafico-barras">
            {estatisticas.votosPorHora.map((dado, index) => (
              <div key={index} className="barra-container">
                <div 
                  className="barra" 
                  style={{ height: `${dado.quantidade}px` }}
                >
                  <span className="valor">{dado.quantidade}</span>
                </div>
                <span className="hora">{dado.hora}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grafico">
          <h3>Distribuição dos Votos</h3>
          <div className="distribuicao-votos">
            {estatisticas.distribuicaoVotos.map((dado, index) => (
              <div key={index} className="item-distribuicao">
                <span className="candidato">{dado.candidato}</span>
                <div className="barra-progresso">
                  <div 
                    className="progresso" 
                    style={{ width: `${dado.percentual}%` }}
                  ></div>
                </div>
                <span className="percentual">{dado.percentual}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="acoes-dashboard">
        <button onClick={() => window.print()}>Imprimir Relatório</button>
        <button onClick={() => {}}>Exportar Dados</button>
      </div>
    </div>
  );
};

export default Dashboard;