import { useState } from 'react';

const VotanteForm = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar votante
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
        placeholder="Nome do Votante"
        className="border p-2 rounded mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Cadastrar Votante</button>
    </form>
  );
};

export default VotanteForm;
