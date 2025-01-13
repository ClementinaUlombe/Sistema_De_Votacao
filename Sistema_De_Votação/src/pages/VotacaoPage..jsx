// src/pages/VotacaoPage.jsx
import VotanteForm from '../components/ControleDeCadastro.';

import ConfigForm from '../components/ConfigVotacao';

const VotacaoPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Votação para Delegado de Turma</h1>
      <ConfigForm />
      <VotanteForm />
    </div>
  );
};

export default VotacaoPage;
