// galeria.js
document.addEventListener("DOMContentLoaded", () => {
    const galerias = document.querySelectorAll(".galeria-wrapper");

    galerias.forEach(wrapper => {
        const galeria = wrapper.querySelector(".galeria");
        const btnIzq = wrapper.querySelector(".flecha-izquierda");
        const btnDer = wrapper.querySelector(".flecha-derecha");
        const desplazamiento = galeria.clientWidth / 2;

        btnIzq.addEventListener("click", () => {
            galeria.scrollBy({ left: -desplazamiento, behavior: "smooth" });
        });

        btnDer.addEventListener("click", () => {
            galeria.scrollBy({ left: desplazamiento, behavior: "smooth" });
        });

        // Opcional: deshabilitar flechas al inicio/final
        const actualizarFlechas = () => {
            btnIzq.disabled = galeria.scrollLeft <= 0;
            btnDer.disabled = galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth - 1;
        };

        galeria.addEventListener("scroll", actualizarFlechas);
        actualizarFlechas();
    });
});