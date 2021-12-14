class BdLivros {

  constructor() {

    let bdLivro = localStorage.getItem('bdLivro');

    if (bdLivro == null) {
      localStorage.setItem('bdLivro', '');
    }

  }

  gravarLivroInicial() {
    this.todosLivros = this.recuperarTodosRegistros();

    if (!this.todosLivros) {
      this.todosLivros = [];
    }
    localStorage.setItem('bdLivro', JSON.stringify(this.todosLivros));

  }

  livroExiste(livro) {

    this.todosLivros = this.recuperarTodosRegistros();

    if (this.todosLivros)
      for (let elemento of this.todosLivros) {

        if (livro._nome === elemento._nome) {
          return true;
        }

      }

    return false;

  }

  gravar(livro) {

    this.todosLivros = this.recuperarTodosRegistros();

    if (!this.livroExiste(livro) && this.todosLivros) {
      this.todosLivros.push(livro);
      localStorage.setItem('bdLivro', JSON.stringify(this.todosLivros));
      return true;
    }

    if (!this.livroExiste(livro) && !this.todosLivros) {
      this.todosLivros = [];
      this.todosLivros.push(livro);
      localStorage.setItem('bdLivro', JSON.stringify(this.todosLivros));
      return true;
    }

    return false;

  }


  recuperaLivro(nome){
    for (let livro of this.recuperarTodosRegistros()) {
      if (livro._nome === nome) {
        return livro;
      }
    }
  }


  recuperarTodosRegistros() {

    let livros = [];

    if (!localStorage.getItem('bdLivro'))
      return false;

    JSON.parse(localStorage.getItem('bdLivro')).forEach((livro) => {

      livros.push(new Livro(livro._nome, livro._autor,
        livro._genero, livro._qtdTot, livro._qtdDisp));

    });

    return livros;

  }

  removerRegistro(nomeLivro = undefined) {
      if ( nomeLivro) {
        let livros = this.recuperarTodosRegistros();

        console.log('remove');

        for (let indice in livros) {
          for (let livro2 of nomeLivro) {
            if (livros[indice]._nome === livro2) {
              livros.splice(indice,1);
            }
          }
        }

        localStorage.setItem('bdLivro', JSON.stringify(livros));
      }
  }

  pesquisar(livro) {

    let livrosFiltradas = this.recuperarTodosRegistros();

    if (livro._nome !== '') {
      livrosFiltradas = livrosFiltradas.filter((d) => {
        return d._nome === livro._nome;
      });
    }

    if (livro.autor !== '') {
      livrosFiltradas = livrosFiltradas.filter((d) => {
        return d.autor === livro.autor;
      });
    }

    if (livro._genero !== '') {
      livrosFiltradas = livrosFiltradas.filter((d) => {
        return d._genero === livro._genero;
      });
    }

    if (livro._qtdTot !== '') {
      livrosFiltradas = livrosFiltradas.filter((d) => {
        return d._qtdTot === livro._qtdTot;
      });
    }

    if (livro._qtdDisp !== '') {
      livrosFiltradas = livrosFiltradas.filter((d) => {
        return d._qtdDisp === livro._qtdDisp;
      });
    }

    return livrosFiltradas;

  }

}