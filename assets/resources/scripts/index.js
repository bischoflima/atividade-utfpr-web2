/*jshint esversion: 6 */

let bdUsuario = new BdUsuarios();
let usuario;

let campoUsuario = function () {
  'use strict';

  return document.getElementById('user').value.trim().toLowerCase();
};

let campoSenha = function () {
  'use strict';

  return document.getElementById('senha').value.trim().toLowerCase();
};

function GeraUsuario(usuario, senha) {
  'use strict';

  return new Usuario(usuario(), senha());
}

(function () {
  'use strict';

  document.getElementById('user').focus();
})();

document.getElementById('user').onblur = function () {
  'use strict';

  if (this.value !== '') {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
};

document.getElementById('senha').onblur = function () {
  'use strict';

  if (this.value !== '') {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
  
};

function usuarioValido() {
  'use strict';

  let usuario = new GeraUsuario(campoUsuario, campoSenha);
  let usuariosBuscados = bdUsuario.pesquisar(usuario);
  let valido = false;

  if (usuariosBuscados) {

    usuariosBuscados.forEach((usuarioForEach) => {

      console.log('antes foreach equals');

      if (usuario.isEquals(usuarioForEach)) valido = true;
    });

  }


  return valido;
}

function fazLogin() {
  'use strict';

  if (usuarioValido()) location.href = 'home.html';
  else {
    window.alert('Usuário ou senha incorreta');
    document.getElementById('user').focus();
  }

}

document.getElementsByName('confirmar')[0].onclick = fazLogin;

document.addEventListener('keypress', function (event) {
  'use strict';

  if (event.keyCode === 13) {
    console.log(event.keyCode);

    fazLogin();
  }

});
