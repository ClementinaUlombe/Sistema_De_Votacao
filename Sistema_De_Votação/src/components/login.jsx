import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // ou './styles.css' dependendo de onde você colocou
import logImage from '../assets/log.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Chamar a API de autenticação e, se for bem-sucedido:
    navigate('/votacao'); // Redireciona para a página de votação
  };

  return (
    <div className="login-container">
      <img src={logImage} alt="Logo" className="logo" />
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sistema de Votação</h2>
        <input 
          type="email" 
          placeholder="e..." 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="input-field"
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          className="input-field"
        />
        <button 
          type="submit" 
          className="login-button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
