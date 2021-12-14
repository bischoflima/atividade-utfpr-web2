'use strict';


let bdAlunos = new BDAlunos();

document.addEventListener('DOMContentLoaded', function () {


  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

});

function buscaCep(cepDigitado) {

  let caminhoBuscaCepApi = `https://ws.apicep.com/cep/${cepDigitado}.json`;

  $.get(caminhoBuscaCepApi, function (retorno) {
    if (retorno.city) {
      $('#endereco_aluno').val(`${retorno.city} - ${retorno.state}`);
    }
  });
}

function validaCep() {
  let cepDigitado = $('#cep_aluno').val();

  let regex = /^\d{5}-\d{3}$/;

  if (regex.test(cepDigitado)) {
    buscaCep(cepDigitado);
  } else {
    console.log('não passou');
  }


}

$(document).ready(function () {
  atualizaItensLista(),

    $('thead').addClass('yellow-text text-ligthen-2'),

    $('#remover').on('click', function () {


      let checkboxes = $('td>label>input');
      let nomesAlunos = [];
      for (const checkbox of checkboxes) {
        if (checkbox.checked && checkbox.id !== 'seleciona-todos') {
          nomesAlunos.push(checkbox.id);
        }
      }

      if (nomesAlunos.length > 0 && window.confirm('Deseja mesmo excluir o item?')) {

        bdAlunos.removerRegistro(nomesAlunos);
        atualizaItensLista();

      }

    }),

    $('#cep_aluno').on('blur', validaCep),

    $('#cep_aluno').mask('00000-000'),

    $('#cpf_aluno').mask('000.000.000-00');

});

let itensLista = function () {


  return document.querySelectorAll('.itens-lista');

};

function validaInputs() {
  if ($('#cpf_aluno').val().length === 14) {
    if ($('#cep_aluno').val().length === 9) {
      return true;
    } else {
      window.alert('o CEP deve obedecer o padrão');
      return false;
    }
  } else {
    window.alert('o CPF deve obedecer o padrão');
    return false;
  }
}

window.formulario.onsubmit = () => {


  if (recuperaDadosTransformaAluno()) {

    for (let item of $('.input-modal')) item.value = '';
    atualizaItensLista();
    return true;

  } else {
    window.alert('Já existe um aluno com estes dados');
    return false;

  }

};

function recuperaDadosTransformaAluno() {
  if (validaInputs()) {
    let nome = $('#nome_aluno').val();
    let classe = $('#classe_aluno').val();
    let cep = $('#cep_aluno').val();
    let endereco = $('#endereco_aluno').val();
    let cpf = $('#cpf_aluno').val();

    let aluno = new Aluno(nome, classe, cep, endereco, cpf);

    if (bdAlunos.gravar(aluno)) {
      atualizaItensLista();
      return true;
    }
  }

  return false;
}

function atualizaItensLista() {


  let alunos = bdAlunos.recuperarTodosRegistros();

  let textoTabela;
  textoTabela = ` 
<table id="tabela-listagem">

<thead class="cabecalho-tabela">
    <td><label><input type="checkbox" id="seleciona-todos"
    onclick="checkBoxSelecionado(this)"/><span></span></label></td>
    <td>Aluno</td>
    <td>Turma</td>
    <td>CEP</td>
    <td>End.</td>
    <td>CPF</td>
  </thead>
`;

  if (alunos.length > 0) {
    for (let aluno of alunos) {
      textoTabela += `
      <tr class="itens-lista">
        <td><label><input type="checkbox" class="item-da-lista" 
        onclick="chackboxDesselecionado(this)" id="${aluno._cpf}"/><span>.</span></label></td>
        <td>${aluno._nome}</td>
        <td>${aluno._classe}</td>
        <td>${aluno._cep}</td>
        <td>${aluno._endereco}</td>
        <td>${aluno._cpf}</td>
      </tr>
    `;
    }
  } else {
    textoTabela = `
      <p class="itens-lista">NENHUM ALUNO CADASTRADO</p>
    `;
  }

  function estilizaItensLista() {
    for (const item of itensLista()) {
      item.classList.add('yellow');
      item.classList.add('lighten-2');
      item.style.width = '95%';
      item.style.margin = '0.5em auto';
      item.style.borderRadius = '10px';
      item.style.fontSize = '1.5em';
    }

    $('thead').addClass('yellow-text text-ligthen-2')

  }

  textoTabela += ` </table>`
  $('#listagem-alunos').html(textoTabela);
  estilizaItensLista();
}


let inputIsValid = (campo) => {


  if (campo.value === '' || campo.value === undefined ||
    campo.value === null || campo.value.length < 3) {

    campo.valid = false;
    campo.setCustomValidity('deve ter pelo menos 3 caracteres!');
    return false;
  } else {
    campo.valid = true;
    campo.setCustomValidity('');
    return true;
  }

};


let itensLista2 = function () {


  return document.querySelectorAll('.item-da-lista');

};

let chackboxDesselecionado = (botao) => {


  if (botao.checked === false) {
    document.querySelector('#seleciona-todos').checked = false;
  } else {
    let contador = 0;

    for (let item of itensLista2()) {
      if (item.checked === true) contador++;
    }

    if (contador === itensLista2().length) document.querySelector('#seleciona-todos').checked = true;
  }

};

let checkBoxSelecionado = (botao) => {

  if (botao.checked) {

    for (let item of itensLista2()) {
      item.checked = true;
    }

  } else {

    for (let item of itensLista2()) {
      item.checked = false;
    }

  }

};

document.querySelector('.voltar').addEventListener('click', () => {


  location.href = 'home.html';

});