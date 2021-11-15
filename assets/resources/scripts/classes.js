class Pessoa {

    constructor (nome, senha) {
        this._nome = nome;
        this._senha = senha;
    }

    isEquals(pessoa){
        return ( this._nome == pessoa._nome &&  this._senha == pessoa._senha) ? true : false;
    }

    isValid(){
        return (this._nome != undefined && this._senha != undefined) ? true : false; 
    }

}

class Usuario extends Pessoa {
    
}