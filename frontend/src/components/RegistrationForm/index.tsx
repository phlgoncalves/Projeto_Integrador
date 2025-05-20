import React, { useState } from "react";

function RegistrationForm() {
  const [nome, setNome] = useState("");
  const [dataNasc, setdataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirSenha, setConfirSenha] = useState("");
  const [error, setError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  // Função para formatar o CPF
  const formatarCPF = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let valor = event.target.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    setCpf(valor);
  };

  // Função para formatar o celular
  const formatarCelular = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let valor = event.target.value.replace(/\D/g, "");
    if (valor.length <= 2) {
      valor = valor.replace(/^(\d{2})/, "($1) ");
    } else if (valor.length <= 7) {
      valor = valor.replace(/^(\d{2})(\d{5})/, "($1) $2-");
    } else {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    setCelular(valor);
  };

  const formatarDataNascimento = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // Remove todos os caracteres que não sejam números
    let valorAtual = event.target.value.replace(/\D/g, "");

    // Formata a data para o formato DD/MM/AAAA
    if (valorAtual.length >= 3 && valorAtual.length <= 4) {
      valorAtual = valorAtual.slice(0, 2) + "/" + valorAtual.slice(2);
    } else if (valorAtual.length >= 5 && valorAtual.length <= 8) {
      valorAtual =
        valorAtual.slice(0, 2) +
        "/" +
        valorAtual.slice(2, 4) +
        "/" +
        valorAtual.slice(4);
    }
    setdataNasc(valorAtual);
  };

  const formatarCEP = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Remove todos os caracteres que não sejam números
    let valorAtual = event.target.value.replace(/\D/g, "");
    // Formata o CEP para o formato XXXXX-XXX
    if (valorAtual.length >= 6) {
      valorAtual = valorAtual.slice(0, 5) + "-" + valorAtual.slice(5, 8);
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

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          alert("CEP não encontrado, revise o número digitado.");
          return;
        }

        setRua(data.logradouro || "");
        setCidade(data.localidade || "");
        setBairro(data.bairro || "");
      })
      .catch(() => {
        alert("Erro ao buscar o CEP.");
      });
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
      let response = await fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          cpf,
          celular,
          senha,
          confirSenha,
        }),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso");
        window.location.href = "/";
      } else {
        alert("Erro ao cadastrar");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar");
    }
  }

  return (
    <div className="registro">
      <label htmlFor="nome">Nome</label>
      <input
        className="input-registro"
        type="text"
        name="nome"
        id="nome"
        placeholder="Digite seu nome completo"
        value={nome}
        //onChange={(e) => setNome(e.target.value)}
        onChange={(e) => {
          const textoOriginal = e.target.value;
          const textoFormatado = textoOriginal
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());

          setNome(textoFormatado);
        }}
      />

      <label htmlFor="dataNasc">Data de Nascimento</label>
      <input
        className="input-registro"
        type="text"
        name="dataNasc"
        id="dataNasc"
        placeholder="DD/MM/AAAA"
        maxLength={10}
        value={dataNasc}
        onChange={formatarDataNascimento}
      />

      <label htmlFor="email">E-mail</label>
      <input
        className="input-registro"
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="error-msg">{error}</p>}

      <label htmlFor="cpf">CPF</label>
      <input
        className="input-registro"
        type="text"
        name="cpf"
        id="cpf"
        placeholder="XXX.XXX.XXX-XX"
        maxLength={14}
        value={cpf}
        onChange={formatarCPF}
      />

      <label htmlFor="celular">Celular</label>
      <input
        className="input-registro"
        type="tel"
        name="celular"
        id="celular"
        placeholder="(XX) XXXXX-XXXX"
        maxLength={15}
        value={celular}
        onChange={formatarCelular}
      />

      <label htmlFor="cep">CEP</label>
      <input
        className="input-registro"
        type="text"
        name="cep"
        id="cep"
        placeholder="XXXXX-XXX"
        maxLength={10}
        value={cep}
        onChange={formatarCEP}
        onBlur={checkCEP}
      />

      <label htmlFor="rua">Rua</label>
      <input
        className="input-registro"
        type="text"
        name="rua"
        id="rua"
        placeholder="Rua Sorocabana"
        maxLength={10}
        value={rua}
      />

      <label htmlFor="rua">Número</label>
      <input
        className="input-registro"
        type="text"
        name="numero"
        id="numero"
        placeholder="1-26"
        maxLength={10}
        value={numero}
      />

      <label htmlFor="rua">Bairro</label>
      <input
        className="input-registro"
        type="text"
        name="bairro"
        id="bairro"
        placeholder="1-26"
        maxLength={10}
        value={bairro}
      />

      <label htmlFor="rua">Cidade</label>
      <input
        className="input-registro"
        type="text"
        name="cidade"
        id="cidade"
        placeholder="1-26"
        maxLength={10}
        value={cidade}
      />

      <label htmlFor="senha">Senha</label>
      <input
        className="input-registro"
        type="password"
        name="senha"
        id="senha"
        placeholder="Crie uma senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <label htmlFor="confirSenha">Confirme sua senha</label>
      <input
        className="input-registro"
        type="password"
        name="confirSenha"
        id="confirSenha"
        placeholder="Confirme a senha"
        value={confirSenha}
        onChange={(e) => setConfirSenha(e.target.value)}
      />
      {senhaError && <p className="error-msg">{senhaError}</p>}

      <div className="container-btn-registro">
        <button onClick={handleSubmit}>Criar Conta</button>
      </div>
    </div>
  );
}
export default RegistrationForm;
