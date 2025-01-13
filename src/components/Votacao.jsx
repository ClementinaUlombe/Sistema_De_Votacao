import { useState, useEffect } from 'react';
import './Votacao.css';
import logImage from '../assets/log.png';
import { useNavigate } from 'react-router-dom';

// API simulada
const apiVotacao = 'https://api.universidade.com/votacao'; // API fictícia
const candidatosMock = [
  { id: 1, nome: 'Candidato A' },
  { id: 2, nome: 'Candidato B' },
  { id: 3, nome: 'Candidato C' },
];

const Votacao = () => {
  const [candidatos, setCandidatos] = useState(candidatosMock);
  const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);
  const [votacaoFinalizada, setVotacaoFinalizada] = useState(false);
  const [novoCandidato, setNovoCandidato] = useState('');
  const [mostrarFormCadastro, setMostrarFormCadastro] = useState(false);
  const navigate = useNavigate();

  // Carregar candidatos da API
  useEffect(() => {
    fetch(apiVotacao)
      .then((res) => res.json())
      .then((data) => setCandidatos(data.candidatos || candidatosMock))
      .catch((err) => console.error('Erro ao carregar candidatos:', err));
  }, []);

  const votar = () => {
    if (!candidatoSelecionado) {
      alert('Por favor, selecione um candidato.');
      return;
    }
    alert(`Voto registrado para o candidato ${candidatoSelecionado.nome}`);
    setVotacaoFinalizada(true);
  };

  const reiniciarVotacao = () => {
    setCandidatoSelecionado(null);
    setVotacaoFinalizada(false);
  };

  const cadastrarCandidato = () => {
    if (!novoCandidato) {
      alert('Por favor, insira um nome para o novo candidato.');
      return;
    }

    const candidatoAdicionado = {
      id: candidatos.length + 1,
      nome: novoCandidato,
    };
    setCandidatos([...candidatos, candidatoAdicionado]);
    setNovoCandidato('');
    setMostrarFormCadastro(false);
  };

  return (
    <div className="votacao">
      <img src={logImage} alt="Logo" className="logo-top-left" />
      <div className="titulo">
        <h2>Votação Universitária</h2>
        <p>Escolha seu candidato e vote!</p>
      </div>

      {votacaoFinalizada ? (
        <div className="votacao-finalizada">
          <h3>Votação Finalizada</h3>
          <p>Você votou no candidato <strong>{candidatoSelecionado.nome}</strong>.</p>
          <button className="reiniciar-button" onClick={reiniciarVotacao}>Reiniciar Votação</button>
        </div>
      ) : (
        <div className="form-votacao">
          <h3>Selecione um Candidato</h3>
          <ul className="candidatos-lista">
            {candidatos.map(candidato => (
              <li key={candidato.id} className="candidato-item">
                <input
                  type="radio"
                  id={candidato.id}
                  name="candidato"
                  value={candidato.id}
                  onChange={() => setCandidatoSelecionado(candidato)}
                />
                <label htmlFor={candidato.id} className="nome-candidato">
                  {candidato.nome}
                </label>
              </li>
            ))}
          </ul>

          <button className="votar-button" onClick={votar}>Votar</button>

          <div className="form-cadastro">
            {mostrarFormCadastro ? (
              <div className="cadastro-candidato">
                <input
                  type="text"
                  placeholder="Nome do Candidato"
                  value={novoCandidato}
                  onChange={(e) => setNovoCandidato(e.target.value)}
                />
                <button className="cadastro-button" onClick={cadastrarCandidato}>Cadastrar Candidato</button>
                <button className="cancelar-button" onClick={() => setMostrarFormCadastro(false)}>Cancelar</button>
              </div>
            ) : (
              <button className="novo-candidato-button" onClick={() => setMostrarFormCadastro(true)}>
                Quero me Candidatar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Votacao;
