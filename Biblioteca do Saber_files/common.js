/*jshint esversion: 6 */

let minutosParados = 0;
let timeout;
let intervalo;
let minutoIncremento = 30000;
let minutoFinal = 180000;
let minutoFinalizaSessao = 25000;

let redireciona = (local) => {
  'use strict';

  location.href = `${local.innerText.trim().toLowerCase()}.html`;

};

/**

let iniciaFimSessao = function () {
  'use strict';

  clearInterval(intervalo);

  timeout = setTimeout(() => {

    window.alert('sessão expirada');
    location.href = 'index.html';

  }, minutoFinalizaSessao);

};

document.addEventListener('mousemove', function () {
  'use strict';

  minutosParados = 0;
  clearTimeout(timeout);

});

if (location.href !== 'index.html') {

  intervalo = setInterval(() => {
    'use strict';

    minutosParados += minutoIncremento;

    if (minutosParados >= minutoFinal) iniciaFimSessao();

    console.log(minutosParados);

  }, 5000);

}

 */