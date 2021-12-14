class BDEmprestar {

  constructor() {

    let bdEmprestar = localStorage.getItem('bdEmprestar');

    if (bdEmprestar == null) {
      localStorage.setItem('bdEmprestar', '[]');
    }

  }


  emprestimoExiste(Emprestar) {

    this.todosEmprestar = this.recuperarTodosRegistros();

    if (this.todosEmprestar)
      for (let elemento of this.todosEmprestar) {

        if (Emprestar._aluno._cpf === elemento._aluno._cpf && Emprestar._livro._nome === elemento._livro._nome) {
          return true;
        }

      }

    return false;

  }

  gravar(Emprestar) {

    this.todosEmprestar = this.recuperarTodosRegistros();

    if (!this.emprestimoExiste(Emprestar) && this.todosEmprestar) {
      this.todosEmprestar.push(Emprestar);
      localStorage.setItem('bdEmprestar', JSON.stringify(this.todosEmprestar));
      return true;
    }

    if (!this.emprestimoExiste(Emprestar) && !this.todosEmprestar) {
      this.todosEmprestar = [];
      this.todosEmprestar.push(Emprestar);
      localStorage.setItem('bdEmprestar', JSON.stringify(this.todosEmprestar));
      return true;
    }

    return false;

  }

  recuperarTodosRegistros() {

    let emprestar = JSON.parse(localStorage.getItem('bdEmprestar'));
    let emprestimos = [];

    if (!localStorage.getItem('bdEmprestar') || emprestar.length === 0)
      return false;

    emprestar.forEach((emprestimo) => {

      emprestimos.push(new Emprestimo(emprestimo._aluno, emprestimo._livro));

    });

    return emprestimos;

  }

  removerRegistro(cpfAluno = undefined , nomeLivro = undefined) {
      if ( cpfAluno && nomeLivro) {
        let emprestar = this.recuperarTodosRegistros();

        console.log('remove');

        for (let indice in emprestar) {
            if (emprestar[indice]._aluno._cpf === cpfAluno && emprestar[indice]._livro._nome === nomeLivro) {
              emprestar.splice(indice,1);
            }
        }

        localStorage.setItem('bdEmprestar', JSON.stringify(emprestar));
      }
  }

  pesquisar(Emprestar) {

    let EmprestarFiltradas = this.recuperarTodosRegistros();

    if (Emprestar._nome !== '') {
      EmprestarFiltradas = EmprestarFiltradas.filter((d) => {
        return d._nome === Emprestar._nome;
      });
    }

    if (Emprestar.autor !== '') {
      EmprestarFiltradas = EmprestarFiltradas.filter((d) => {
        return d.autor === Emprestar.autor;
      });
    }

    if (Emprestar._genero !== '') {
      EmprestarFiltradas = EmprestarFiltradas.filter((d) => {
        return d._genero === Emprestar._genero;
      });
    }

    if (Emprestar._qtdTot !== '') {
      EmprestarFiltradas = EmprestarFiltradas.filter((d) => {
        return d._qtdTot === Emprestar._qtdTot;
      });
    }

    if (Emprestar._qtdDisp !== '') {
      EmprestarFiltradas = EmprestarFiltradas.filter((d) => {
        return d._qtdDisp === Emprestar._qtdDisp;
      });
    }

    return EmprestarFiltradas;

  }

}