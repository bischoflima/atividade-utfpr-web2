document.querySelector('.voltar').addEventListener('click', () => {
    location.href = 'home.html';
});

let itensLista = function () {

    return document.querySelectorAll('.itens-lista');

}

function estilizaItensLista() {
    for (const item of itensLista()) {
        item.classList.add('yellow')
        item.classList.add('lighten-2')
        item.style.width = '98%';
        item.style.margin = '0.5em auto';
        item.style.borderRadius = '10px';
        item.style.fontSize = '1.5em';
    }
}

let livros = new BdLivros();


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

window.btnconfirmar.onclick = () => {
    
    buscaDadosInput();
}

function buscaDadosInput() {
    let idLivro = document.getElementById('id_livro');
    let nomeLivro = document.getElementById('nome_livro');
    let autorLivro = document.getElementById('autor_livro');
    let generoLivro = document.getElementById('genero_livro');




    function limpaInputs(){

        let inputs = document.getElementsByTagName('input');

        for (const input of inputs) {
            input.value = '';
        }
    }

    limpaInputs();
}

