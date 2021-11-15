function sair() {

    if (confirm('Deseja mesmo sair? ')) location.href = 'index.html';

}

function novoUsuario() {

    //deve lançar um modal com os usuarios cadastrados

    let usuario = new Usuario(dadosUsuario());

    let bdUsuarios = new BdUsuarios();
    bdUsuarios.gravar( usuario);
    console.log(usuario);

    console.log(bdUsuarios.recuperarTodosRegistros());
}

function digitaSenha() {
    let senhaUsuario = prompt('Digite a senha desejada:');
    let confirmaSenha = prompt('Confirme a senha digitada:');

    if (senhaUsuario != confirmaSenha) {
        alert('AS SENHAS NÂO COINCIDEM, digite novamente.');
        digitaSenha();
    }

    return confirmaSenha;
}

function dadosUsuario() {
    let nomeUsuario = prompt('Digite o nome do usuario:');
    let senha = digitaSenha();

    return {
        nome: `${nomeUsuario}`,
        senha: `${senha}`
    }
}