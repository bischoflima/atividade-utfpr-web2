class Bdusuarios {

    constructor() {
        let idusuario = localStorage.getItem('idusuario');

        if (idusuario === null) {
            localStorage.setItem('idusuario', 0);
        }
    }

    getProximoId() {
        let proximoidusuario = localStorage.getItem('idusuario');
        return parseInt(proximoidusuario) + 1;
    }

    gravar(usuario) {
        let idusuario = this.getProximoId();
        localStorage.setItem('idusuario', idusuario);
        localStorage.setItem(idusuario, JSON.stringify(usuario));
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('idusuario'));
        let usuarios = [];

        for (let i = 1; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let usuario = JSON.parse(localStorage.getItem(i));
            usuario.idusuario = i;
            usuarios.push(usuario);
        }
        return usuarios;
    }

    removerRegistro(idusuario = undefined) {
        if (idusuario) {
            localStorage.removeItem(`${idusuario}`);
        }
    }

    pesquisar(usuario) {

        let usuariosFiltradas = this.recuperarTodosRegistros();
        // filter de ano, mes, dia, tipo, descricao, valor

        if (usuario._ano != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._ano == usuario._ano
            });
        }

        if (usuario._dia != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._dia == usuario._dia
            });
        }

        if (usuario._mes != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._mes == usuario._mes
            });
        }

        if (usuario._tipo != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._tipo == usuario._tipo
            })
        }

        if (usuario._valor != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._valor == usuario._valor
            });
        }

        if (usuario._descricao != '') {
            usuariosFiltradas = usuariosFiltradas.filter((d) => {
                return d._descricao == usuario._descricao
            })
        }


        return usuariosFiltradas;
    }
}