//SCRIPT PARA CAMBIAR ENTRE LISTAS

const selector = document.getElementById("selector");
const listas = document.querySelectorAll("ul");
const btnModoOscuro = document.getElementById("modo-oscuro-btn");

selector.addEventListener("change", () => {
    const valor = selector.value;

    // Ocultar todas las listas
    listas.forEach(lista => lista.style.display = "none");

    // Si hay una opción válida, mostrar la lista correspondiente
    if (valor) {
        const listaSeleccionada = document.getElementById(valor);
        listaSeleccionada.style.display = "block";

        // Actualizar contador
        const totalTests = listaSeleccionada.querySelectorAll("li").length;
        const importantes = listaSeleccionada.querySelectorAll(".importante").length;
        const contador = listaSeleccionada.querySelector(".contador");
        contador.textContent = `Total tests: ${totalTests} · Destacados: ${importantes}`;
    }
});

// Modo oscuro
const activarModoOscuro = () => {
    document.body.classList.toggle("dark");
    const estado = document.body.classList.contains("dark");
    localStorage.setItem("modoOscuro", estado);
    btnModoOscuro.textContent = estado ? "Desactivar modo oscuro" : "Activar modo oscuro";
};

btnModoOscuro.addEventListener("click", activarModoOscuro);

// Cargar preferencia guardada
if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("dark");
    btnModoOscuro.textContent = "Desactivar modo oscuro";
}

const btnArriba = document.getElementById("volver-arriba");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnArriba.style.opacity = "1";
        btnArriba.style.pointerEvents = "auto";
    } else {
        btnArriba.style.opacity = "0";
        btnArriba.style.pointerEvents = "none";
    }
});

// Comportamiento al pulsar
btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});