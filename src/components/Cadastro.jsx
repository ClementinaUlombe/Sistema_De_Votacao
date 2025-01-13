import logImage from '../assets/log.png'; // Importando a imagem
import { useState, useEffect } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    matricula: '',
    tipo: 'estudante',
    email: ''
  });

  useEffect(() => {
    // Simulação de carregamento de usuários
    const usuariosSimulados = [
      { id: 1, nome: 'Clemntina Katchinombelo Ulombe ', matricula: '2001001', tipo: 'estudante', email: 'cle@univ.edu' },
      { id: 2, nome: 'Maria Santos', matricula: '2021002', tipo: 'estudante', email: 'maria@univ.edu' }
    ];
    setUsuarios(usuariosSimulados);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const adicionarUsuario = (e) => {
    e.preventDefault();
    if (!novoUsuario.nome || !novoUsuario.matricula) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const novoId = usuarios.length + 1;
    setUsuarios([...usuarios, { ...novoUsuario, id: novoId }]);
    setNovoUsuario({
      nome: '',
      matricula: '',
      tipo: 'estudante',
      email: ''
    });
  };

  const removerUsuario = (id) => {
    setUsuarios(usuarios.filter(user => user.id !== id));
  };

  return (
    <div className="cadastro-container">
    <img src={logImage} alt="Logo" className="logo-top-left" />
      <h2>Controle de Cadastro</h2>

      <form onSubmit={adicionarUsuario} className="form-cadastro">
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={novoUsuario.nome}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Matrícula:</label>
          <input
            type="text"
            name="matricula"
            value={novoUsuario.matricula}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo:</label>
          <select
            name="tipo"
            value={novoUsuario.tipo}
            onChange={handleInputChange}
          >
            <option value="estudante">Estudante</option>
            <option value="professor">Professor</option>
            <option value="funcionario">Funcionário</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={novoUsuario.email}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Adicionar Usuário</button>
      </form>

      <div className="lista-usuarios">
        <h3>Usuários Cadastrados</h3>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Tipo</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.matricula}</td>
                <td>{usuario.tipo}</td>
                <td>{usuario.email}</td>
                <td>
                  <button onClick={() => removerUsuario(usuario.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cadastro;