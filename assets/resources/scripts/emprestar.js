'use strict';

let bdEmprestar = new BDEmprestar();
let bdAlunos = new BDAlunos();
let bdLivros = new BdLivros();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var selecte = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selecte);

});


function capturaDados() {
    let livro = $('#select_livro').val();
    let aluno = $('#select_aluno').val();

    if (livro) {
        if (aluno) {

            let imprestimo = new Emprestimo(bdAlunos.recuperaAluno(aluno), bdLivros.recuperaLivro(livro));

            bdEmprestar.gravar(imprestimo);

            window.location.reload();

        } else {

            window.alert('deve selecionar um aluno');

        }
    } else {
        window.alert('deve selecionar um livro!');
    }
}

$(document).ready(function () {
    $('.voltar').on('click', function () {
        window.location.href = 'home.html';
    });

    $('div').find('label').css('color', 'yellow');

    atualizaItensSelect();

    $('#btnconfirmar').on('click', function () {
        capturaDados();
    });

    atualizaItensLista();
});


function escreveAlunoSelect(alunos = []) {

    let textoSelect = '';

    if (alunos.length > 0) {
        textoSelect = '<option value="0" disabled selected >Selecione um aluno</option>';
        for (const aluno of alunos) {
            textoSelect += `<option value="${aluno._cpf}" >${aluno._nome} - ${aluno._cpf}</option>`;
        }
    } else {
        textoSelect = '<option value="0" disabled selected >Nenhum Aluno para selecionar</option>';
    }

    document.getElementById('select_aluno').innerHTML = textoSelect;
}

function escreveLivroSelect(livros = []) {

    let textoSelect = '';

    if (livros.length > 0) {
        textoSelect = '<option value="0" disabled selected >Selecione um livro</option>';
        for (const livro of livros) {
            textoSelect += `<option value="${livro._nome}" >${livro._nome} - ${livro._autor}</option>`;
        }
    } else {
        textoSelect = '<option value="0" disabled selected >Nenhum Livro para selecionar</option>';
    }

    document.getElementById('select_livro').innerHTML = textoSelect;
}

function atualizaItensSelect() {

    let livros = bdLivros.recuperarTodosRegistros();
    let alunos = bdAlunos.recuperarTodosRegistros();

    escreveAlunoSelect(alunos);
    escreveLivroSelect(livros);

}

// listagem de itens

let itensLista = function () {


    return document.querySelectorAll('.itens-lista');

};


function devolver(botao) {
    let valorBotao = (botao.id).split('_');

    if (window.confirm('Deseja mesmo fazer a devolução do livro?')) {

        bdEmprestar.removerRegistro(valorBotao[0], valorBotao[1]);

        atualizaItensLista();

    }
}

function atualizaItensLista() {


    let emprestimos = bdEmprestar.recuperarTodosRegistros();

    let textoTabela;
    textoTabela = ` 
  <table id="tabela-listagem">
  
  <thead class="cabecalho-tabela">
      <td>Aluno</td>
      <td>Turma</td>
      <td>Livro</td>
      <td>Autor</td>
    </thead>
  `;

    if (emprestimos.length > 0) {
        for (let emprestimo of emprestimos) {
            textoTabela += `
        <tr class="itens-lista">
         <td>${emprestimo._aluno._nome}</td>
          <td>${emprestimo._aluno._classe}</td>
          <td>${emprestimo._livro._nome}</td>
          <td>${emprestimo._livro._autor}</td>
          <td><button id="${emprestimo._aluno._cpf}_${emprestimo._livro._nome}" class="grey 
          darken-4 yellow-text waves-effect 
          waves-light" onclick="devolver(this)" >DEVOLVER</button></td>
        </tr>
      `;
        }
    } else {
        textoTabela = `
        <p class="itens-lista">NENHUM LIVRO EMPRESTADO</p>
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
    $('#listagem-emprestimo').html(textoTabela);
    estilizaItensLista();
}