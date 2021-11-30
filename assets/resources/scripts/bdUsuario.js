/*jshint esversion: 6 */

class BdUsuarios {

  constructor() {
    let bdUsuario = localStorage.getItem('bdUsuario');
    let todosUsuarios;

    if (!bdUsuario) {
      this.gravarUsuarioInicial(this.usuarioPadrao());
    }

  }

  usuarioPadrao() {

    return {
      _nome: 'admin',
      _senha: 'admin'
    };

  }

  gravarUsuarioInicial(usuario) {
    this.todosUsuarios = this.recuperarTodosRegistros();

    if (!this.todosUsuarios) {
      this.todosUsuarios = [];
      this.todosUsuarios.push(new Usuario(usuario._nome, usuario._senha));
    }

    localStorage.setItem('bdUsuario', JSON.stringify(this.todosUsuarios));

  }

  usuarioExiste(usuario) {

    this.todosUsuarios = this.recuperarTodosRegistros();

    for (let elemento of this.todosUsuarios) {

      if (usuario._nome === elemento._nome) {
        return true;
      }

    }

    return false;

  }

  gravar(usuario) {
    this.todosUsuarios = this.recuperarTodosRegistros();

    if (!this.usuarioExiste(usuario) && this.todosUsuarios) {
      this.todosUsuarios.push(usuario);
      localStorage.setItem('bdUsuario', JSON.stringify(this.todosUsuarios));

      return true;
    }

    return false;

  }

  recuperarTodosRegistros() {
    let usuarios = [];

    if (!localStorage.getItem('bdUsuario')) return false;

    JSON.parse(localStorage.getItem('bdUsuario')).forEach((user) => {

      usuarios.push(new Usuario(user._nome, user._senha));

    });

    return usuarios;

  }

  removerRegistro(usuario = undefined) {
    if (usuario) {

    }
  }

  pesquisar(usuario) {

    let usuariosFiltradas;
    this.todosUsuarios = this.recuperarTodosRegistros();


    if (usuario._nome !== '') {
      usuariosFiltradas = this.todosUsuarios.filter((d) => {
        return d._nome === usuario._nome;
      });
    }

    return usuariosFiltradas;
    
  }
}