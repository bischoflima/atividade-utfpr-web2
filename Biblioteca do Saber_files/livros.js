/*jshint esversion: 6 */

let bdLivros = new BdLivros();


document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

});

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

window.formulario.onsubmit = () => {
  'use strict';

  return false;

};

let buscaDadosTransformaLivro = () => {
  'use strict';

  

};

let inputIsValid = (campo) => {
  'use strict';

  if (campo.value === '' || campo.value === undefined ||
    campo.value === null || campo.value.length < 3) {

    campo.valid = false;
    campo.setCustomValidity('deve ter pelo menos 3 caracteres!');

  } else {
    campo.valid = true;
    campo.setCustomValidity('');

  }

  console.log(campo.classList);

};

let inputNumberIsValid = (campo) => {
  'use strict';

  if (campo.value === '' || campo.value === undefined || campo.value === null || campo.value < 1) {

    campo.valid = false;
    campo.setCustomValidity('deve ter pelo menos 1 livro');

  } else {
    campo.valid = true;
    campo.setCustomValidity('');

  }


};
