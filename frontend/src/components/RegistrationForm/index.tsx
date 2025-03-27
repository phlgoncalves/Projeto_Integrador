
import React, { useState } from "react"

function RegistrationForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirSenha, setConfirSenha] = useState('')

  function handleSubmit() {
    fetch('http://192.168.1.3:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        email: 'email@email.com',
        celular: '1234567890',
        senha: 'senha',
        confirSenha: 'confirSenha'
      })
    })
  }

  return (
    <div className="registro">
      <label htmlFor="nome">Nome</label>
      <input 
        type="text" 
        name="nome" 
        id="nome" 
        placeholder="Digite seu nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" id="cpf" placeholder="Digite o CPF. Apenas Números" maxLength={14} onInput={formatarCPF} />
      <label htmlFor="celular">Celular</label>
      <input type="tel" name="celular" id="celular" placeholder="Informe seu numero de celular" maxLength={15} onChange={formatarCelular}/>
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" placeholder="Crie uma senha" />
      <label htmlFor="confirSenha">Confirme sua senha</label>
      <input type="password" name="confirSenha" id="confirSenha" placeholder="Confirme a senha" />
      <button onClick={handleSubmit}>Criar Conta</button>
    </div>
  )
}

export default RegistrationForm

// Função para formatar o CPF
const formatarCPF = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const campo = event.target as HTMLInputElement; // Acessa o campo de input
  let valor = campo.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  // Aplica a máscara no CPF (XXX.XXX.XXX-XX)
  valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  
  campo.value = valor; // Atualiza o valor do campo com a máscara aplicada
}

// Função para formatar o celular no formato (XX) XXXXX-XXXX
const formatarCelular = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const campo = event.target as HTMLInputElement; // Acessa o campo de input
  let valor = campo.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  // Aplica a máscara no celular (XX) XXXXX-XXXX
  if (valor.length <= 2) {
    valor = valor.replace(/^(\d{2})/, '($1) '); // Formata o código de área
  } else if (valor.length <= 7) {
    valor = valor.replace(/^(\d{2})(\d{5})/, '($1) $2-'); // Formata a primeira parte do número
  } else {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata a segunda parte do número
  }

  campo.value = valor; // Atualiza o valor do campo com a máscara aplicada
}





{/* <script>
  function formatarCPF(campo) {
    var valor = campo.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'); // Adiciona a máscara
    campo.value = valor; // Atualiza o campo com o valor formatado
  }
</script> */}

 