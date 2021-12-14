'use strict';

let bdLivros = new BdLivros();

document.addEventListener('DOMContentLoaded', function () {


  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

});

$(document).ready(function () {
  atualizaItensLista(),

  $('thead').addClass('yellow-text text-ligthen-2'),

  $('#remover').on('click', function () { 


    let checkboxes = $('td>label>input');
    let nomesLivros = [];
    for (const checkbox of checkboxes) {
      if(checkbox.checked && checkbox.id !== 'seleciona-todos'){
        nomesLivros.push(checkbox.id);
      }
    }

    if (nomesLivros.length > 0 && window.confirm('Deseja mesmo excluir o item?')) {
      
      bdLivros.removerRegistro(nomesLivros);
      atualizaItensLista();

    }

  } );

});

let itensLista = function () {


  return document.querySelectorAll('.itens-lista');

};

document.querySelector('.voltar').addEventListener('click', () => {


  location.href = 'home.html';

});

function atualizaItensLista() {


  let livros = bdLivros.recuperarTodosRegistros();

  let textoTabela;
  textoTabela = ` 
<table id="tabela-listagem">

<thead class="cabecalho-tabela">
    <td><label><input type="checkbox" id="seleciona-todos"
    onclick="checkBoxSelecionado(this)"/><span></span></label></td>
    <td>Nome</td>
    <td>Autor</td>
    <td>Gênero</td>
    <td>Quantidade</td>
    <td>Disponível</td>
  </thead>
`;

  if (livros.length > 0) {
    for (let livro of livros) {
      textoTabela += `
      <tr class="itens-lista">
        <td><label><input type="checkbox" class="item-da-lista" 
        onclick="chackboxDesselecionado(this)" id="${livro._nome}"/><span>.</span></label></td>
        <td>${livro._nome}</td>
        <td>${livro._autor}</td>
        <td>${livro._genero}</td>
        <td>${livro._qtdTot}</td>
        <td>${livro._qtdDisp}</td>
      </tr>
    `;
    }
  } else {
    textoTabela = `
      <p class="itens-lista">NENHUM LIVRO CADASTRADO</p>
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
  $('#listagem-livros').html(textoTabela);
  estilizaItensLista();
}

window.formulario.onsubmit = () => {


  inputIsValid(document.forms.formulario.nome_livro);
  inputIsValid(document.forms.formulario.autor_livro);
  inputIsValid(document.forms.formulario.genero_livro);
  inputNumberIsValid(document.forms.formulario.quantidade_total);
  inputNumberIsValid(document.forms.formulario.quantidade_disponivel);

  let livro = buscaDadosTransformaLivro();


  if (livro.isValid()) {

    if (bdLivros.gravar(livro)) {

      for (let item of document.querySelectorAll('.input-modal')) item.value = '';
      atualizaItensLista();
      return true;

    } else {
      window.alert('Este livro já existe');
      return false;

    }

  } else {

    window.alert('Há dados inconsistentes no cadastro do livro.');
    return false;

  }

};

let buscaDadosTransformaLivro = () => {


  let nome = document.forms.formulario.nome_livro.value;
  let autor = document.forms.formulario.autor_livro.value;
  let genero = document.forms.formulario.genero_livro.value;
  let quantidade = document.forms.formulario.quantidade_total.value;
  let quantidadeDisponivel = document.forms.formulario.quantidade_disponivel.value;

  return (new Livro(nome, autor, genero, quantidade, quantidadeDisponivel));

};

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

let inputNumberIsValid = (campo) => {


  if (campo.value === '' || campo.value === undefined || campo.value === null || parseInt(campo.value) < 1) {

    campo.valid = false;
    campo.setCustomValidity('deve ter pelo menos 1 livro');
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


// remover item da lista e do BD

