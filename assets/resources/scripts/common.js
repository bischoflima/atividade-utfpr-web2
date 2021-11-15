let redireciona = (local) => {
    location.href = `${local.innerText.trim().toLowerCase()}.html`;
}

let minutosParados = 0;
let timeout;
let intervalo;
let minutoIncremento = 30000;
let minutoFinal = 180000;
let minutoFinalizaSessao = 25000;

let iniciaFimSessao = function () {

    clearInterval(intervalo);
    
    timeout = setTimeout(() => {



        alert('sessão expirada');
        location.href = 'index.html';

    }, minutoFinalizaSessao);

}

document.addEventListener('mousemove', function () {

    minutosParados = 0;
    clearTimeout(timeout);

});


if (location.href != 'index.html') {
    intervalo = setInterval(() => {

        minutosParados += minutoIncremento;

        if (minutosParados >= minutoFinal) iniciaFimSessao();

        console.log(minutosParados);


    }, 5000);
}