class BdLivros {

    constructor() {
        let idLivro = localStorage.getItem('idLivro');

        if (idLivro === null) {
            localStorage.setItem('idLivro', 0);
        }
    }

    getProximoId() {
        let proximoidLivro = localStorage.getItem('idLivro');
        return parseInt(proximoidLivro) + 1;
    }

    gravar(livro) {
        let idLivro = this.getProximoId();
        localStorage.setItem('idLivro', idLivro);
        localStorage.setItem(idLivro, JSON.stringify(livro));
    }

    recuperarTodosRegistros() {
        let qtdRegistros = parseInt(localStorage.getItem('idLivro'));
        let livros = [];

        for (let i = 1; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let livro = JSON.parse(localStorage.getItem(i));
            livro.idLivro = i;
            livros.push(livro);
        }
        return livros;
    }

    removerRegistro(idLivro = undefined) {
        if (idLivro) {
            localStorage.removeItem(`${idLivro}`);
        }
    }

    pesquisar(livro) {

        let livrosFiltradas = this.recuperarTodosRegistros();
        // filter de ano, mes, dia, tipo, descricao, valor

        if (livro._ano != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._ano == livro._ano
            });
        }

        if (livro._dia != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._dia == livro._dia
            });
        }

        if (livro._mes != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._mes == livro._mes
            });
        }

        if (livro._tipo != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._tipo == livro._tipo
            })
        }

        if (livro._valor != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._valor == livro._valor
            });
        }

        if (livro._descricao != '') {
            livrosFiltradas = livrosFiltradas.filter((d) => {
                return d._descricao == livro._descricao
            })
        }


        return livrosFiltradas;
    }
}