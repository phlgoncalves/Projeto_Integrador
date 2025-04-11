import React, { useState } from "react"

function RegistrationForm() {
  const [nome, setNome] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [celular, setCelular] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [confirSenha, setConfirSenha] = useState('');
  const [error, setError] = useState('');
  const [senhaError, setSenhaError] = useState('');


  // Função para formatar o CPF
  const formatarCPF = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let valor = event.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    setCpf(valor);
  }

  // Função para formatar o celular
  const formatarCelular = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let valor = event.target.value.replace(/\D/g, '');
    if (valor.length <= 2) {
      valor = valor.replace(/^(\d{2})/, '($1) ');
    } else if (valor.length <= 7) {
      valor = valor.replace(/^(\d{2})(\d{5})/, '($1) $2-');
    } else {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    setCelular(valor);
  }

  const formatarDataNascimento = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Remove todos os caracteres que não sejam números
    let valorAtual = event.target.value.replace(/\D/g, '');

    // Formata a data para o formato DD/MM/AAAA
    if (valorAtual.length >= 3 && valorAtual.length <= 4) {
      valorAtual = valorAtual.slice(0, 2) + '/' + valorAtual.slice(2);
    } else if (valorAtual.length >= 5 && valorAtual.length <= 8) {
      valorAtual = valorAtual.slice(0, 2) + '/' + valorAtual.slice(2, 4) + '/' + valorAtual.slice(4);
    }
    setdataNasc(valorAtual);
  }

  const formatarCEP = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Remove todos os caracteres que não sejam números
    let valorAtual = event.target.value.replace(/\D/g, '');
    // Formata o CEP para o formato XXXXX-XXX
    if (valorAtual.length >= 6) {
      valorAtual = valorAtual.slice(0, 5) + '-' + valorAtual.slice(5, 8);
    }
    setCep(valorAtual);
  };

  // Função para validar o email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (senha: string, confirSenha: string): boolean => {
    return senha === confirSenha;
  };

  async function handleSubmit() {
    // Validando e-mail
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    // Validando senha
    if (!validatePassword(senha, confirSenha)) {
      setSenhaError("As senhas não coincidem.");
      return;
    }

    // Enviando os dados para o servidor
    try {
      let response = await fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          celular,
          senha,
          confirSenha
        })
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso");
        window.location.href = '/';
      } else {
        alert("Erro ao cadastrar");
      }
    } catch (error) {
      console.error('Erro:', error);
      alert("Erro ao cadastrar");
    }
  }


  return (
    <div className="registro">
      <label htmlFor="nome">Nome</label>
      <input className="input-registro"
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite seu nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="dataNasc">Data de Nascimento</label>
      <input className="input-registro" type="date" name="dataNasc" id="dataNasc" />
      <label htmlFor="email">E-mail</label>
      <input className="input-registro"
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <label htmlFor="cpf">CPF</label>
      <input className="input-registro"
        type="text"
        name="cpf"
        id="cpf"
        placeholder="Digite o CPF. Apenas Números"
        maxLength={14}
        value={cpf}
        onChange={formatarCPF}
      />

      <label htmlFor="celular">Celular</label>
      <input className="input-registro"
        type="tel"
        name="celular"
        id="celular"
        placeholder="Informe seu numero de celular"
        maxLength={15}
        value={celular}
        onChange={formatarCelular}
      />

      <label htmlFor="text">CEP</label>
      <input
        type="text"
        name="cep"
        id="cep"
        placeholder="XXXXX-XXX"
        maxLength={10}
        value={cep}
        onChange={formatarCEP} />

      <label htmlFor="senha">Senha</label>
      <input className="input-registro"
        type="password"
        name="senha"
        id="senha"
        placeholder="Crie uma senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <label htmlFor="confirSenha">Confirme sua senha</label>
      <input className="input-registro"
        type="password"
        name="confirSenha"
        id="confirSenha"
        placeholder="Confirme a senha"
        value={confirSenha}
        onChange={(e) => setConfirSenha(e.target.value)}
      />
      {senhaError && <p style={{ color: 'red' }}>{senhaError}</p>}
      <div className="container-btn-registro">
        <button onClick={handleSubmit}>Criar Conta</button>
      </div>
    </div>
  );
}

export default RegistrationForm;


