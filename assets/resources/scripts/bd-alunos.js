class BDAlunos {

  constructor() {

    let bdAlunos = localStorage.getItem('bdAlunos');

    if (bdAlunos == null) {
      localStorage.setItem('bdAlunos', JSON.stringify([]));
    }

  }

  alunoExiste(aluno) {

    this.todosAluno = this.recuperarTodosRegistros();

    if (this.todosAluno)
      for (let elemento of this.todosAluno) {

        if (aluno._cpf === elemento._cpf) {
          return true;
        }

      }

    return false;

  }

  gravar(aluno) {

    this.todosAlunos = this.recuperarTodosRegistros();

    if (!this.alunoExiste(aluno) && this.todosAlunos) {
      this.todosAlunos.push(aluno);
      localStorage.setItem('bdAlunos', JSON.stringify(this.todosAlunos));
      return true;
    }

    if (!this.alunoExiste(aluno) && !this.todosAlunos) {
      this.todosAlunos = [];
      this.todosAlunos.push(aluno);
      localStorage.setItem('bdAlunos', JSON.stringify(this.todosAlunos));
      return true;
    }

    return false;

  }

  recuperaAluno(cpf){
    for (let aluno of this.recuperarTodosRegistros()) {
      if (aluno._cpf === cpf) {
        return aluno;
      }
    }
  }

  recuperarTodosRegistros() {

    let alunos = [];

    if (!localStorage.getItem('bdAlunos'))
      return false;

    JSON.parse(localStorage.getItem('bdAlunos')).forEach((aluno) => {

      alunos.push(new Aluno(aluno._nome, aluno._classe,
        aluno._cep, aluno._endereco, aluno._cpf));

    });

    return alunos;

  }

  removerRegistro(nomeAluno = undefined) {
    if (nomeAluno) {
      let alunos = this.recuperarTodosRegistros();

      console.log('remove');

      for (let indice in alunos) {
        for (let aluno2 of nomeAluno) {
          if (alunos[indice]._cpf === aluno2) {
            alunos.splice(indice, 1);
          }
        }
      }

      localStorage.setItem('bdAlunos', JSON.stringify(alunos));
    }
  }
}