/*jshint esversion: 6 */

let bdUsuarios = new BdUsuarios();

function sair() {
 'use strict';

  if (window.confirm('Deseja mesmo sair? ')) location.href = 'index.html';

}

function digitaSenha() {
  'use strict';

  let senhaUsuario = window.prompt('Digite a senha desejada:');
  let confirmaSenha = window.prompt('Confirme a senha digitada:');

  if (senhaUsuario !== confirmaSenha) {
    console.log('onde nao devia');
    window.alert('AS SENHAS NÂO COINCIDEM, digite novamente.');
    digitaSenha();
  }

  return confirmaSenha;
  
}

function dadosUsuario() {
  'use strict';

  let nomeUsuario = window.prompt('Digite o nome do usuario:');
  let senha = digitaSenha();

  return {
    _nome: `${nomeUsuario}`,
    _senha: `${senha}`
  };

}

function novoUsuario() {
 'use strict';

  let dados = dadosUsuario();
  let usuario = new Usuario(dados._nome, dados._senha);

  if (!bdUsuarios.gravar(usuario)) window.alert('Já existe um usuário com este nome');

}