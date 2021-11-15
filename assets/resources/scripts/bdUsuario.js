class BdUsuarios {

    constructor() {
        let idUsuario = localStorage.getItem('idUsuario');

        if (idUsuario === null) {
            localStorage.setItem('idUsuario', 10);
            this.gravar({
                _nome: 'admin',
                _senha: 'admin'
            })
        }
    }

    getProximoId() {
        let proximoidUsuario = localStorage.getItem('idUsuario');
        return parseInt(proximoidUsuario) + 1;
    }

    gravar(usuario) {
        let idUsuario = this.getProximoId();

        if (idUsuario < 50) {
            localStorage.setItem('idUsuario', idUsuario);
            localStorage.setItem(idUsuario, JSON.stringify(usuario));
        } else {
            alert('Limite máximo de usuários cadastrados');
        }
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('idUsuario'));
        let usuarios = [];

        for (let i = 11; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let usuario = JSON.parse(localStorage.getItem(i));
            usuario.idUsuario = i;
            usuarios.push(usuario);
        }
        return usuarios;
    }

    removerRegistro(idUsuario = undefined) {
        if (idUsuario) {
            localStorage.removeItem(`${idUsuario}`);
        }
    }

    pesquisar(usuario) {

        let todosUsuarios = this.recuperarTodosRegistros();
        let usuariosFiltradas;

        if (usuario._nome != '') {
            usuariosFiltradas = todosUsuarios.filter((d) => {
                return d._nome == usuario._nome
            });
        }

        return usuariosFiltradas;
    }
}