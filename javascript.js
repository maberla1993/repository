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

/* ------ BOTÓN MODO OSCURO ------ */
const btnDark = document.getElementById("toggle-dark-mode");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btnDark.textContent = "☀️";
    } else {
        btnDark.textContent = "🌙";
    }
});

const btnArriba = document.getElementById("volver-arriba");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
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