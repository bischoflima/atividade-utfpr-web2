/*jshint esversion: 6 */

let livros = new BdLivros();

let itensLista = function () {
  'use strict';

  return document.querySelectorAll('.itens-lista');

};

document.querySelector('.voltar').addEventListener('click', () => {
  'use strict';

  location.href = 'home.html';
});


function estilizaItensLista() {
  'use strict';

  for (const item of itensLista()) {
    item.classList.add('yellow');
    item.classList.add('lighten-2');
    item.style.width = '98%';
    item.style.margin = '0.5em auto';
    item.style.borderRadius = '10px';
    item.style.fontSize = '1.5em';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

window.btnconfirmar.onclick = () => {
  'use strict';

  buscaDadosInput();
};

function buscaDadosInput() {
  'use strict';

  let idLivro = document.getElementById('id_livro');
  let nomeLivro = document.getElementById('nome_livro');
  let autorLivro = document.getElementById('autor_livro');
  let generoLivro = document.getElementById('genero_livro');

  function limpaInputs() {

    let inputs = document.getElementsByTagName('input');

    for (const input of inputs) {
      input.value = '';
    }
  }

  limpaInputs();
}