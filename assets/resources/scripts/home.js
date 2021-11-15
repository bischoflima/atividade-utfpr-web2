function sair() {

    if (confirm('Deseja mesmo sair? ')) location.href = 'index.html';

}

function digitaSenha() {
    let senhaUsuario = prompt('Digite a senha desejada:');
    let confirmaSenha = prompt('Confirme a senha digitada:');

    if (senhaUsuario != confirmaSenha) {
        console.log('onde nao devia');
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

function novoUsuario() {

    /**TODO deve lançar um modal com os usuarios cadastrados */
    let dados = dadosUsuario();

    let usuario = new Usuario(dados.nome, dados.senha);

    let bdUsuarios = new BdUsuarios();
    bdUsuarios.gravar(usuario);
}