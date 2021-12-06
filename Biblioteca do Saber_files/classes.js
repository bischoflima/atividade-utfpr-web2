/*jshint esversion: 6 */

class Pessoa {

  constructor(nome, senha) {
    this._nome = nome;
    this._senha = senha;
  }

  isEquals(pessoa) {
    return (this._nome === pessoa._nome && this._senha === pessoa._senha) ? true : false;
  }

  isValid() {
    return (this._nome !== undefined && this._senha !== undefined) ? true : false;
  }

}

class Usuario extends Pessoa {

}

class Livro {

  constructor(nome, autor, genero, qtdTot, qtdDisp) {
    this._nome = nome;
    this._autor = autor;
    this._genero = genero;
    this._qtdTot = qtdTot;
    this._qtDisp = qtdDisp;
  }

  isEquals(livro) {
    return (this._nome === livro._nome && this._senha === livro._senha) ? true : false;
  }

  isValid() {
    return (this._nome !== undefined &&
      this._autor !== undefined &&
      this._genero !== undefined &&
      this._qtdTot !== undefined &&
      this._qtDisp !== undefined) ? true : false;
  }

}