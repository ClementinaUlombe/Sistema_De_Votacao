// src/components/ConfigVotacao/ConfigForm.jsx
import { useState } from 'react';

const ConfigForm = () => {
  const [tipoVotacao, setTipoVotacao] = useState('');

  const handleConfigSubmit = (e) => {
    e.preventDefault();
    // Lógica para configurar a votação
  };

  return (
    <form onSubmit={handleConfigSubmit}>
      <select
        value={tipoVotacao}
        onChange={(e) => setTipoVotacao(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value="delegado">Delegado de Turma</option>
        <option value="melhorProfessor">Melhor Professor</option>
        <option value="melhorAluno">Melhor Aluno</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Configurar Votação</button>
    </form>
  );
};

export default ConfigForm;
