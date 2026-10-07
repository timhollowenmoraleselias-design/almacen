let btnTema = document.getElementById("btn-tema");
let cuerpo = document.body;


btnTema.addEventListener("click", function () {
    cuerpo.classList.toggle("modo-oscuro");

    if (cuerpo.classList.contains("modo-oscuro")) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Oscuro";
    }
});