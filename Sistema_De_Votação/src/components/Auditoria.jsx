import logImage from '../assets/log.png'; // Importando a imagem
import { useState, useEffect } from 'react';
import './Auditoria.css';

const Auditoria = () => {
  const [logs, setLogs] = useState([]);
  const [filtroData, setFiltroData] = useState('');
  const [filtroAcao, setFiltroAcao] = useState('');

  useEffect(() => {
    // Simulação de logs de auditoria
    const logsSimulados = [
      {
        id: 1,
        data: '2024-01-13 10:30:00',
        usuario: 'João Silva',
        acao: 'LOGIN',
        descricao: 'Usuário realizou login no sistema'
      },
      {
        id: 2,
        data: '2024-01-13 10:35:15',
        usuario: 'João Silva',
        acao: 'VOTO',
        descricao: 'Voto registrado com sucesso'
      },
      {
        id: 3,
        data: '2024-01-13 11:00:00',
        usuario: 'Admin',
        acao: 'APURACAO',
        descricao: 'Iniciou processo de apuração'
      }
    ];
    setLogs(logsSimulados);
  }, []);

  const filtrarLogs = () => {
    return logs.filter(log => {
      const matchData = !filtroData || log.data.includes(filtroData);
      const matchAcao = !filtroAcao || log.acao.toLowerCase().includes(filtroAcao.toLowerCase());
      return matchData && matchAcao;
    });
  };

  const exportarLogs = () => {
    // Lógica para exportar logs
    console.log("Exportando logs...");
  };

  return (
    <div className="auditoria-container">
     <img src={logImage} alt="Logo" className="logo-top-left" />
      <h2>Auditoria do Sistema</h2>

      <div className="filtros">
        <div className="filtro-grupo">
          <label>Filtrar por Data:</label>
          <input
            type="date"
            value={filtroData}
            onChange={(e) => setFiltroData(e.target.value)}
          />
        </div>

        <div className="filtro-grupo">
          <label>Filtrar por Ação:</label>
          <input
            type="text"
            value={filtroAcao}
            onChange={(e) => setFiltroAcao(e.target.value)}
            placeholder="Digite a ação..."
          />
        </div>
      </div>

      <div className="logs-container">
        <table>
          <thead>
            <tr>
              <th>Data/Hora</th>
              <th>Usuário</th>
              <th>Ação</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {filtrarLogs().map((log) => (
              <tr key={log.id}>
                <td>{log.data}</td>
                <td>{log.usuario}</td>
                <td>{log.acao}</td>
                <td>{log.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="acoes-auditoria">
        <button onClick={exportarLogs}>Exportar Logs</button>
      </div>
    </div>
  );
};

export default Auditoria;