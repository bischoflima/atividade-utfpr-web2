document.querySelector('.voltar').addEventListener('click', () => {
    location.href = 'home.html';
});

let itensLista = function () {
 
    return document.querySelectorAll('.itens-lista');

}

function estilizaItensLista() {
    for (const item of itensLista()) {
        item.classList.add('yellow')
        item.classList.add('lighten-2')
        item.style.width = '98%';
        item.style.margin = '0.5em auto';
        item.style.borderRadius = '10px';
        item.style.fontSize = '1.5em';
    }
}