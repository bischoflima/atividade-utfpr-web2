/*jshint esversion: 6 */

class BdLivros {

  constructor() {

    let bdLivro = localStorage.getItem('bdLivro');

    if (bdLivro == null) {
      localStorage.setItem('bdLivro');
    }

  }

  gravarLivroInicial(livro) {
    this.todosLivros = this.recuperarTodosRegistros();

    if (!this.todosLivros) {
      this.todosLivros = [];

      this.todosLivros.push(new Livro(livro._nome, livro._autor, livro._genero, livro._qtdTot, livro._qtdDisp));
    }

    localStorage.setItem('bdLivro', JSON.stringify(this.todosLivros));

  }

  livroExiste(livro) {

    this.todosLivros = this.recuperarTodosRegistros();

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

    return false;

  }

  recuperarTodosRegistros() {

    let livros = [];

    if (!localStorage.getItem('bdLivro'))
      return false;

    JSON.parse(localStorage.getItem('bdLivro')).forEach((user) => {

      livros.push(new Livro(user._nome, user._senha));

    });

    return livros;

  }

  removerRegistro(livro = undefined) {
    // FIXME: criar a remoção de registros
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