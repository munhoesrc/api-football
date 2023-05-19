import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Verifica se a API key está preenchida
    if (!apiKey) {
      setError('Por favor, insira uma API key válida.');
      return;
    }

    try {
      // Verifica autenticidade da API key
      const response = await fetch('https://v3.football.api-sports.io/status', {
        headers: {
          'x-apisports-key': apiKey
        }
      });

      if (response.ok) {
        navigate('/home');
      } else {
        setError('API key inválida. Por favor, verifique novamente.');
      }
    } catch (error) {
      setError('Ocorreu um erro ao verificar a API key. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite sua API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
