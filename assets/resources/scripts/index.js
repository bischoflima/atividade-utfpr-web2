let bdUsuario = new BdUsuarios();
let usuario;

let campoUsuario = function () {
    return document.getElementById('user').value.trim().toLowerCase();
}

let campoSenha = function () {
    return document.getElementById('senha').value.trim().toLowerCase();
}

function geraUsuario(usuario, senha) {
    return new Usuario(usuario(), senha());
}

(function () {
    document.getElementById('user').focus();
})();

document.getElementById('user').onblur = function () {

    if (this.value != '') {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
};

document.getElementById('senha').onblur = function () {

    if (this.value != '') {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
};

function usuarioValido() {

    let usuario = new geraUsuario(campoUsuario, campoSenha);

    let usuariosBuscados = bdUsuario.pesquisar(usuario);

    let valido = false;

    if (usuariosBuscados) {

        usuariosBuscados.forEach((usuarioForEach) => {

            console.log('antes foreach equals');

            if (usuario.isEquals(usuarioForEach))
                valido = true;
        });
    }

    return valido;
}

function fazLogin() {
    if (usuarioValido()) location.href = 'home.html'
    else {
        alert('Usuário ou senha incorreta');
        document.getElementById('user').focus();
    }
}

document.getElementsByName('confirmar')[0].onclick = fazLogin;

document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {

        console.log(event.code);
        fazLogin();
    }
});