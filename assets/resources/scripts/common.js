let redireciona = (local) => {
    location.href = `${local.innerText.trim().toLowerCase()}.html`;
}